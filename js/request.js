// https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=4

async function getRequest(url) {
  return await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Error: ' + response.status);
    }
    return response.json();
  });
}

function createSliderTeplate(item) {
  const { pro_img, pro_name, pro_desc } = item;
  return `
      <div class="swiper-slide">
      <div class="slider-image">
        <img src="images/${pro_img}" alt="slider image">
      </div>
      <div class="slider-text">
        <h4>${pro_name}</h4>
        <p>${pro_desc}</p>
        <a href="#" class="common-button">자세히 보기</a>
      </div>
    </div>
  `;
}
function createOfferTeplate(item) {
  const { pro_img, pro_name, pro_desc, pro_price } = item;
  return `
      <div class="product-frame">
      <div class="product-item">
        <div class="product-img">
          <img src="images/${pro_img}" alt="item image">
        </div>
        <div class="product-text">
          <h4>${pro_name}</h4>
          <strong>${pro_price}원</strong>
          <p>${pro_desc}</p>
          <a href="#" class="common-button">자세히 보기</a>
        </div>
      </div>
    </div>
  `;
}

// Get Products Function
const silderWrapper = document.querySelector('.swiper-wrapper');
const offersWrapper = document.querySelector('.products');

async function getProducts(n, wrapper, template) {
  const getProductsUrl = `https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=${n}`;

  try {
    //요청 시도
    const data = await getRequest(getProductsUrl);
    const htmlString = data.map(template).join('');
    wrapper.insertAdjacentHTML('beforeend', htmlString);
  } catch (error) {
    //요청 시 에러 사항
    console.log(`Error: ${error}`);
  }
}
getProducts(4, silderWrapper, createSliderTeplate);
getProducts(3, offersWrapper, createOfferTeplate);
