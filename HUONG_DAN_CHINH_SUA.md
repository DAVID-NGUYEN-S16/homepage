# Hướng Dẫn Chỉnh Sửa Nội Dung

Tất cả nội dung của trang web được lưu trong file `src/data/content.json`. Bạn chỉ cần chỉnh sửa file này để thay đổi nội dung hiển thị.

## Cách Chỉnh Sửa

1. Mở file `src/data/content.json` trong trình soạn thảo
2. Chỉnh sửa các phần bạn muốn thay đổi
3. Lưu file
4. Trang web sẽ tự động cập nhật (nếu đang chạy `npm start`)

## Các Phần Có Thể Chỉnh Sửa

### 1. Thông Tin Cá Nhân (personal)

```json
"personal": {
  "name": "Tên của bạn",
  "title": "Chức danh của bạn",
  "bio": "Giới thiệu về bản thân..."
}
```

**Ví dụ:**
```json
"personal": {
  "name": "Nguyễn Văn A",
  "title": "Nghiên cứu sinh Tiến sĩ Khoa học Máy tính tại Đại học Quốc gia Singapore",
  "bio": "Xin chào! Tôi là A, một nghiên cứu sinh năm thứ ba..."
}
```

### 2. Thông Tin Liên Hệ (contact)

```json
"contact": {
  "location": "Địa điểm",
  "email": "email@example.com",
  "linkedin": "https://linkedin.com/in/yourprofile",
  "github": "https://github.com/yourusername",
  "googleScholar": "https://scholar.google.com/citations?user=yourid"
}
```

**Lưu ý:** Đảm bảo các link là đầy đủ và bắt đầu bằng `https://`

### 3. Lĩnh Vực Nghiên Cứu (research)

```json
"research": [
  {
    "title": "Tên lĩnh vực nghiên cứu",
    "publications": ["Công bố 1", "Công bố 2"]
  }
]
```

**Ví dụ:**
```json
"research": [
  {
    "title": "Machine Learning",
    "publications": ["Paper 1 (ICML'24)", "Paper 2 (NeurIPS'23)"]
  },
  {
    "title": "Natural Language Processing",
    "publications": ["Paper 3 (ACL'24)"]
  }
]
```

### 4. Tin Tức (news)

```json
"news": [
  {
    "date": "Tháng Năm 2024",
    "content": "Nội dung tin tức...",
    "links": []
  }
]
```

**Ví dụ:**
```json
"news": [
  {
    "date": "Tháng 12 2024",
    "content": "Bài báo của tôi đã được chấp nhận tại hội nghị ACL 2024!",
    "links": []
  },
  {
    "date": "Tháng 11 2024",
    "content": "Tôi đã tham gia hội thảo quốc tế tại Singapore.",
    "links": []
  }
]
```

### 5. Công Bố Khoa Học (publications)

```json
"publications": [
  {
    "year": "2024",
    "items": [
      {
        "id": 1,
        "title": "Tên bài báo",
        "authors": "Tác giả 1, Tác giả 2",
        "venue": "Tên hội nghị/tạp chí"
      }
    ]
  }
]
```

**Ví dụ:**
```json
"publications": [
  {
    "year": "2024",
    "items": [
      {
        "id": 1,
        "title": "A Novel Approach to Machine Learning",
        "authors": "Nguyễn Văn A, Trần Thị B",
        "venue": "Proceedings of ICML 2024"
      }
    ]
  },
  {
    "year": "2023",
    "items": [
      {
        "id": 2,
        "title": "Deep Learning Applications",
        "authors": "Nguyễn Văn A",
        "venue": "Journal of AI Research"
      }
    ]
  }
]
```

**Lưu ý:** 
- `id` là số thứ tự của công bố (số lớn hơn = công bố mới hơn)
- Dùng `*` sau tên tác giả để đánh dấu đồng tác giả, ví dụ: "Nguyễn Văn A*, Trần Thị B*"

### 6. Học Vấn (education)

```json
"education": [
  {
    "degree": "Bằng cấp",
    "period": "Tháng Năm 2020 - Tháng Năm 2024",
    "institution": "Tên trường",
    "address": "Địa chỉ trường",
    "details": "Chi tiết bổ sung"
  }
]
```

**Ví dụ:**
```json
"education": [
  {
    "degree": "Tiến sĩ Khoa học Máy tính",
    "period": "Tháng 8 2023 - Hiện tại",
    "institution": "Đại học Quốc gia Singapore",
    "address": "21 Lower Kent Ridge Rd, Singapore",
    "details": "Được hướng dẫn bởi Giáo sư X, Y, Z"
  }
]
```

### 7. Kinh Nghiệm Nghiên Cứu (experiences)

```json
"experiences": [
  {
    "title": "Chức danh",
    "period": "Tháng Năm 2023 - Tháng Năm 2024",
    "organization": "Tên tổ chức",
    "location": "Địa điểm",
    "details": "Chi tiết công việc"
  }
]
```

**Ví dụ:**
```json
"experiences": [
  {
    "title": "Research Intern",
    "period": "Tháng 6 2024 - Tháng 8 2024",
    "organization": "Google Research",
    "location": "Mountain View, California",
    "details": "Nghiên cứu về Large Language Models"
  }
]
```

### 8. Dịch Vụ (services) - Tùy chọn

```json
"services": [
  {
    "title": "Conference Reviewer",
    "details": "ACL, EMNLP, NAACL"
  },
  {
    "title": "Journal Reviewer",
    "details": "TACL, TMLR"
  }
]
```

Phần này hiển thị ở trang "Services" khi click vào link trong menu.

### 9. Giải Thưởng (awards)

```json
"awards": [
  {
    "title": "Tên giải thưởng",
    "details": "Chi tiết giải thưởng"
  }
]
```

**Ví dụ:**
```json
"awards": [
  {
    "title": "Best Paper Award",
    "details": "ACL 2024"
  },
  {
    "title": "Outstanding Student Award",
    "details": "2023"
  }
]
```

Phần này hiển thị ở trang "Honors" khi click vào link trong menu.

## Lưu Ý Quan Trọng

1. **Định dạng JSON:** Luôn đảm bảo:
   - Dùng dấu ngoặc kép `"` cho tất cả các key và string
   - Dùng dấu phẩy `,` để phân cách các phần tử (trừ phần tử cuối cùng)
   - Đóng tất cả các ngoặc `{}` và `[]`

2. **Ký tự đặc biệt:** Nếu có dấu ngoặc kép trong nội dung, dùng dấu backslash: `\"`

3. **Xóa phần không cần:** Nếu không muốn hiển thị một phần nào đó, bạn có thể:
   - Xóa toàn bộ phần đó trong JSON
   - Hoặc để mảng rỗng `[]`

4. **Thêm ảnh đại diện:** 
   - Đặt ảnh của bạn tại `public/images/profile.jpg`
   - Khuyến nghị: ảnh vuông, kích thước tối thiểu 200x200px

## Kiểm Tra Sau Khi Chỉnh Sửa

Sau khi chỉnh sửa file JSON, kiểm tra:

1. File JSON có hợp lệ không (không có lỗi cú pháp)
2. Trang web có hiển thị đúng không
3. Các link có hoạt động không

Nếu có lỗi, kiểm tra lại cú pháp JSON hoặc xem console trong trình duyệt (F12) để tìm lỗi.

## Ví Dụ File JSON Hoàn Chỉnh

Xem file `src/data/content.json` để tham khảo cấu trúc đầy đủ.

