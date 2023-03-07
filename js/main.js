const quotesBody = document.querySelector('.quote-content');
const authorBody = document.querySelector('.quote-author');
const btn = document.getElementById('btn');

// fetching data from the api
const getQuotes = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const ObjData = await response.json();
    return [ObjData.content, ObjData.author];
}
// typewriter fn


function displayQuotes() {
    getQuotes().then(([content, author]) => {
        // quotesBody.innerText = content;
        quotesBody.innerHTML = "";
        var i = 0;
        var txt = content; /* The text */
        var speed = 30; /* The speed/duration of the effect in milliseconds */
        function typeWriter() {

            if (i < txt.length) {
                quotesBody.innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        //for author
        authorBody.innerHTML = "";
        var j = 0;
        var txt2 = author; /* The text */
        //var speed = 50; /* The speed/duration of the effect in milliseconds */
        function typeWriter2() {

            if (i < txt2.length) {
                authorBody.innerHTML += txt2.charAt(i);
                j++;
                setTimeout(typeWriter2, speed);
            }
        }


        typeWriter();
        typeWriter2();
        // authorBody.innerText = author;
    });
}

// addeventlistner on btn
btn.addEventListener('click', displayQuotes);

