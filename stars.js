const stars = document.querySelectorAll('.area_star');
const rate  = document.querySelector('#rate');

function add_class(index_el)
{
    for (let i = stars.length - 1; i >= index_el; i--)
    {
        if (stars[i].classList.contains("active"))
            stars[i].classList.remove("active");
    }
    for (let i = 0; i <= index_el; i++)
    {
        if (!(stars[i].classList.contains("active")))
            stars[i].classList.add("active");
    }

    rate.textContent = (index_el + 1) / stars.length * 100;
}

for (let i = 0; i < stars.length; i++)
{
    stars[i].addEventListener("click", () => {
        add_class(i);
    });
}
