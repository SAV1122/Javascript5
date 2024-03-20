//Tugas hari ini
//ketika mouse nya diatas gambar atau kota maka hewannya ada suaranya
$("document").ready(function () {
    $("#div1").mouseover(function () {
        $(this).css({
            background:
                "url('https://www.blibli.com/friends-backend/wp-content/uploads/2024/02/B110055-1-Sekilas-Tentang-Ras-Kucing-Persia-1024x538.jpg')",
        });
    });
    $("div").mouseout(function () {
        $(this).css({
            background: "green",
        });
    });
    $("#div2").mouseover(function () {
        $(this).css({
            background:
                "url('https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01gxt3rx2adkrfd6cvvb2hqq58.jpg')",
        });
    });
    $("#div3").mouseover(function () {
        $(this).css({
            background:
                "url('https://awsimages.detik.net.id/community/media/visual/2022/02/04/ayam-betina.jpeg?w=600&q=90')",
        });
    });
    function PlaySound(e) {
        var thissound = document.querySelector("audio." + e.target.music);
        thissound.play();
    }
    function StopSound(e) {
        var thissound = document.querySelector("audio." + e.target.music);
        thissound.pause();
        thissound.currentTime = 0;
    }

    $(document).ready(function () {
        $(".music").hover(
            function () {
                var audio = $(this).find(".audio")[0];
                audio.play();
            },
            function () {
                var audio = $(this).find(".audio")[0];
                audio.pause();
                audio.currentTime = 0;
            }
        );
    });
    Swal.fire({
        title: "Selamat Datang",
        text: "Arah kan kursor ke gambar jika ingin melihat dan mendengarkan suara",
        icon: "success",
    });
});
