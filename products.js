/* =========================================================
   DANH SÁCH SẢN PHẨM — CHỈ CẦN SỬA FILE NÀY
   =========================================================
   Mỗi lần thêm sản phẩm mới, copy 1 khối { ... } bên dưới,
   dán vào cuối mảng (trước dấu ]), đổi "id" thành số mới
   (chưa từng dùng), rồi điền thông tin của bạn vào.

   Giải thích từng dòng:
   - id          : số thứ tự, không được trùng với sản phẩm khác
   - title       : tên sản phẩm
   - subtitle    : mô tả ngắn (hiện dưới tên, ở trang chủ)
   - discount    : % giảm giá hiện trên badge cam, để "" nếu không có
   - isNew       : true nếu muốn hiện badge "Mới" màu xanh lá, false nếu không
   - typeLabel   : chữ hiện trên badge góc phải ảnh, ví dụ "App"
   - typeIcon    : icon nhỏ đứng trước typeLabel
   - gradient    : màu nền khi CHƯA có video Youtube (không cần sửa nếu không thích)
   - youtube     : ID video Youtube — dán vào đây, để "" nếu chưa có video
                    (lấy từ link: youtube.com/watch?v=DÁN_ĐOẠN_NÀY)
   - priceNow    : giá đang bán
   - priceOld    : giá gốc (gạch ngang)
   - desc        : mô tả dài, hiện ở trang chi tiết
   - features    : danh sách tính năng nổi bật, mỗi dòng 1 gạch đầu, trong ngoặc kép
   ========================================================= */

const PRODUCTS = [
  {
    id: "1",
    title: "Xây dựng KOC ảo — Thời trang nữ",
    subtitle: "Đồng nhất · Chân thực · Hiệu quả",
    discount: "-31%",
    isNew: true,
    typeLabel: "App",
    typeIcon: "📱",
    gradient: "linear-gradient(165deg,#2A1B5C,#141024 65%)",
    youtube: "",
    priceNow: "590.000đ",
    priceOld: "850.000đ",
    desc: "App tạo KOC ảo cho ngành thời trang nữ — giữ nguyên danh tính, gương mặt và dáng người xuyên suốt các video, giúp shop có một gương mặt đại diện nhất quán mà không cần thuê người mẫu thật.",
    features: [
      "Tạo KOC ảo đồng nhất giữa các video",
      "Giữ nguyên vóc dáng, khuôn mặt, phong cách thay đồ chính xác",
      "Ảnh chân thực, ánh sáng tự nhiên, bố cục sang trọng"
    ]
  },
  {
    id: "2",
    title: "Auto App — Làm Video Xưởng Gia Dụng",
    subtitle: "Tạo ảnh showroom AI & video bán hàng nhanh chóng",
    discount: "-31%",
    isNew: false,
    typeLabel: "App",
    typeIcon: "🗂",
    gradient: "linear-gradient(165deg,#12203F,#141024 65%)",
    youtube: "",
    priceNow: "690.000đ",
    priceOld: "990.000đ",
    desc: "App tự động hoá quy trình sản xuất nội dung cho ngành đồ gia dụng — từ ảnh showroom AI đến video bán hàng, rút ngắn thời gian sản xuất nội dung xuống chỉ còn vài phút.",
    features: [
      "Tạo ảnh showroom AI cho sản phẩm nội thất/gia dụng",
      "Tự động dựng video bán hàng từ ảnh sản phẩm có sẵn",
      "Phù hợp cho xưởng sản xuất quy mô vừa và nhỏ"
    ]
  },
  {
    id: "3",
    title: "Tư vấn review chuẩn gu — KOC",
    subtitle: "Video mirror-selfie phong cách thời trang",
    discount: "-44%",
    isNew: false,
    typeLabel: "App",
    typeIcon: "📱",
    gradient: "linear-gradient(165deg,#3C1030,#141024 65%)",
    youtube: "",
    priceNow: "450.000đ",
    priceOld: "800.000đ",
    desc: "App tạo video review theo phong cách mirror-selfie, phù hợp với các shop thời trang muốn có nội dung KOC tự nhiên, gần gũi mà không cần lộ mặt người thật.",
    features: [
      "Video mirror-selfie tự nhiên, không lộ mặt",
      "Phong cách thời trang chuẩn gu, dễ tùy chỉnh",
      "Tối ưu cho affiliate và bán hàng trên mạng xã hội"
    ]
  },
  {
    id: "4",
    title: "Thanh tra kiểm chứng mỹ phẩm",
    subtitle: "Test quảng cáo hàng nói có đúng không?",
    discount: "-48%",
    isNew: false,
    typeLabel: "App",
    typeIcon: "📱",
    gradient: "linear-gradient(165deg,#3C1030,#0F0A22 65%)",
    youtube: "",
    priceNow: "390.000đ",
    priceOld: "750.000đ",
    desc: "App tạo video dạng kiểm chứng/test sản phẩm mỹ phẩm — định dạng nội dung đang được ưa chuộng, giúp tăng độ tin cậy cho sản phẩm khi quảng cáo.",
    features: [
      "Kịch bản kiểm chứng sản phẩm tự động",
      "Định dạng nội dung tăng độ tin cậy, dễ viral",
      "Phù hợp ngành mỹ phẩm, thực phẩm chức năng"
    ]
  }

  /* ĐỂ THÊM SẢN PHẨM MỚI: copy khối mẫu bên dưới (bỏ dấu /* và * /),
     dán vào ngay TRƯỚC dấu ] ở cuối file, nhớ thêm dấu phẩy , sau khối
     phía trên nó.

  ,{
    id: "5",
    title: "Tên sản phẩm mới",
    subtitle: "Mô tả ngắn",
    discount: "-20%",
    isNew: true,
    typeLabel: "App",
    typeIcon: "📱",
    gradient: "linear-gradient(165deg,#2A1B5C,#141024 65%)",
    youtube: "",
    priceNow: "500.000đ",
    priceOld: "700.000đ",
    desc: "Mô tả dài cho trang chi tiết.",
    features: [
      "Tính năng 1",
      "Tính năng 2",
      "Tính năng 3"
    ]
  }
  */
];
