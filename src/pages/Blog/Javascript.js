import React from "react";

import Header from "../../components/Header";

import Slide from "react-reveal/Slide";

export default function Javascript() {
  return (
    <div>
      <Header />
      <Slide left big delay={1000}>
        <div className="container">
          <h1>JavaScript thật sự là gì?</h1>
          <p>
            JavaScript (viết tắt là "js") là một ngôn ngữ lập trình mang đầy đủ
            tính năng của một ngôn ngữ lập trình động mà khi nó được áp dụng vào
            một tài liệu HTML, nó có thể đem lại khả năng tương tác động trên
            các trang web. Cha đẻ của ngôn ngữ này là Brendan Eich, đồng sáng
            lập dự án Mozilla, quỹ Mozilla, và tập đoàn Mozilla.
          </p>
          <p>
            JavaScript thật sự rất linh hoạt. Bạn có thể bắt đầu với các bước
            nhỏ, với thư viện ảnh, bố cục có tính thay đổi và phản hồi đến các
            nút nhấn. Khi có nhiều kinh nghiệm hơn, bạn có thể tạo ra các trò
            chơi, hoạt họa 2D hoặc 3D, ứng dụng cơ sở dữ liệu toàn diện và nhiều
            thứ khác!
          </p>
          <p>
            Bản thân Javascript là một ngôn ngữ linh động. Các nhà phát triển đã
            viết ra một số lượng lớn các công cụ thuộc top của core Javascript,
            mở ra một lượng lớn tính năng bổ sung với ít nỗ lực nhất. Nó bao
            gồm:
          </p>
          <ul>
            <li>
              Giao diện lập trình ứng dụng trên trình duyệt (API) — Các API được
              xây dựng bên trong các trình duyệt web, cung cấp tính năng như tạo
              HTML động, cài đặt CSS, thu tập và điều khiển video trực tiếp từ
              webcam của người dùng hoặc sinh ra đồ dọa 3D và các mẫu audio.
            </li>
            <li>
              Các API bên thứ ba cho phép nhà phát triển kết hợp tính năng trong
              website của họ từ người cung cấp nội dung khác chẳng hạn như
              Twitter hay Facebook.
            </li>
            <li>
              Từ các framework và thư viện bên thứ ba bạn có thể áp dụng tới tài
              liệu HTML của bạn, cho phép bạn nhanh chóng xây dựng được các
              trang web và các ứng dụng.
            </li>
          </ul>
        </div>
      </Slide>
    </div>
  );
}
