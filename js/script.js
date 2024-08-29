document.forms["form"].addEventListener("submit", function (event) {
    event.preventDefault();
    ValidateForm();
});

// untuk memvalidasi form //
function ValidateForm() {
    const name = document.forms["form"]["input-name"].value;
    const birth = document.forms["form"]["input-birth"].value;
    const gender = document.forms["form"]["gender"].value;
    let message = document.forms["form"]["message-input"].value;
    const errpopup = document.getElementById("errorpopup");
    const sucpopup = document.getElementById("sucesspopup");
    const birthpopup = document.getElementById("birthpopup");
    const getDay = new Date().toLocaleString();
    const now = new Date();
    const selectedBirth = new Date(birth);

    if (name == "" || birth == "" || gender == "" || message == "") {
        // untuk menset popup jika data yang diisi tidak sesuai //
        showpopup(errpopup);
    } else if (selectedBirth > now)  {
        // selectedBirth mengambil data input birth //
        // now berarti mengambil data waktu di hari ini //
        // untuk menset popup jika tanggal lahir yang dimasukkan tidak boleh melebihi dari hari itu juga //
        showpopup(birthpopup);
    } else {
        // untuk menset popup jika data berhasil di submit //
        showpopup(sucpopup);
        SetSender(name, birth, gender, message, getDay);

        // mengatur pada input, jika user selesai dalam mengisi form, maka input akan di reset //
        setTimeout(function () {
            document.forms["form"].reset();
        }, 500);
    }
}


// untuk men set result dan nama di awal //
function SetSender(name, birth, gender, message, time) {
    document.getElementById("name").innerHTML = name;
    document.getElementById("name-input").innerHTML = name;
    document.getElementById("birth-input").innerHTML = birth;
    document.getElementById("gender-input").innerHTML = gender;
    document.getElementById("message-input").innerHTML = message;
    document.getElementById("time-input").innerHTML = time;
}

// untuk men set popup berhasil atau tidak //
function showpopup(ShowPopUp) {
    ShowPopUp.classList.add("open-popup");

    // mengatur pergerakan dari form ke popup menjadi smooth //
    ShowPopUp.scrollIntoView({ behavior: "smooth", block: "center" });

    let closebtn = ShowPopUp.querySelector(".close-button");

    closebtn.addEventListener("click", function () {
        ShowPopUp.classList.remove("open-popup");
    }, { once: true });
}

// untuk banner image //
let indexSlide = 1;
showDivs(indexSlide);

// mengatur autoslide image //
function plusDivs(n) {
    showDivs((indexSlide += n));
}

function showDivs(n) {
    let i;
    let imglist = document.getElementsByClassName("img");
    if (n > imglist.length) {
        indexSlide = 1;
    } else if (n < 1) {
        indexSlide = imglist.length;
    }

    for (let i = 0; i < imglist.length; i++) {
        imglist[i].classList.remove("active");
    }

    imglist[indexSlide - 1].classList.add("active");
}

// mengatur durasi autoslide image //
setInterval(() => {
    plusDivs(1);
}, 2000);

