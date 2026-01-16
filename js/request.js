// https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=4

async function getRequest(url) {
  return await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Error: ' + response.status);
    }
    return response.json();
  });
}

// Get Products Function
const silderWrapper = document.querySelector('.swiper-wrapper');
const offersWrapper = document.querySelector('.products');
// const sliderDOM = `
//       <div class="swiper-slide">
//         <div class="silder-image">
//           <img src="images/${pro_img}" alt="slider image" />
//         </div>
//         <div class="silder-text">
//           <h4>${pro_name}</h4>
//           <p>${pro_desc}</p>
//           <a href="#" class="common-button">자세히 보기</a>
//         </div>
//       </div>
//     `;

async function getProducts(n, wrapper) {
  const getProductsUrl = `https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=${n}`;

  try {
    //요청 시도
    const data = await getRequest(getProductsUrl);
    let dataElement = '';

    data.map((item) => {
      const { pro_img, pro_name, pro_desc } = item;
      dataElement += `
      <div class="swiper-slide">
        <div class="silder-image">
          <img src="images/${pro_img}" alt="slider image" />
        </div>
        <div class="silder-text">
          <h4>${pro_name}</h4>
          <p>${pro_desc}</p>
          <a href="#" class="common-button">자세히 보기</a>
        </div>
      </div>
    `;
    });
    wrapper.insertAdjacentHTML('beforeend', dataElement);
  } catch (error) {
    //요청 시 에러 사항
    console.log(`Error: ${error}`);
  }
}
getProducts(4, silderWrapper);
