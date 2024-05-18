document.addEventListener('DOMContentLoaded', function() {
const priceValue = document.getElementById('priceValue');
const priceSlider = document.getElementById('priceSlider');
const products = document.querySelectorAll('.product[data-price]');
let ShowFavorite = false;
let ShowCult = false;
let Showother = false;
document.getElementById('show-favorites-btn').addEventListener('click', function() {
        ShowFavorite = !ShowFavorite;
        updateProducts();
    });

    document.getElementById('show-cult').addEventListener('click', function() {
        ShowCult = !ShowCult;
        updateProducts();
    });

    document.getElementById('show-other').addEventListener('click', function() {
        Showother = !Showother;
        updateProducts();
    });

    priceSlider.addEventListener('input', function() {
        updateProducts();
    });
    
    function updateProducts() {
            products.forEach(product => {
                const productPrice = parseInt(product.getAttribute('data-price'));
                priceValue.textContent = priceSlider.value;

                if (productPrice >= parseInt(priceSlider.value)) {
                    let isCult = JSON.parse(product.getAttribute('data-cult'));
                    let isOther = JSON.parse(product.getAttribute('data-other'));
                    let isFavorite = JSON.parse(product.getAttribute('data-favorite'));

                    if ((ShowCult && !isCult) || (Showother && !isOther) || (ShowFavorite && !isFavorite)) {
                        product.style.display = 'none';
                    } else {
                        product.style.display = 'block';
                    }
                } else {
                    product.style.display = 'none';
                }
            });
        }
});
