# 🚀 Hướng dẫn Deploy lên GitHub Pages

## ✅ Đã chuẩn bị sẵn:
- ✅ GitHub Actions workflow (`.github/workflows/deploy.yml`)
- ✅ package.json đã config `homepage: "/"`

## 📝 Các bước deploy:

### 1. Tạo repo trên GitHub (nếu chưa có)
```
Truy cập: https://github.com/new
Repository name: <username>.github.io  (QUAN TRỌNG!)
Visibility: Public
Click "Create repository"
```

### 2. Khởi tạo Git và push code

Mở terminal tại folder này và chạy:

```bash
# Khởi tạo git repo
git init

# Add tất cả files
git add .

# Commit
git commit -m "Initial commit: Setup homepage with dark/light mode"

# Đổi branch sang main (nếu đang là master)
git branch -M main

# Add remote (THAY <username> bằng GitHub username của bạn!)
git remote add origin https://github.com/<username>/<username>.github.io.git

# Push code lên GitHub
git push -u origin main
```

### 3. Bật GitHub Pages

1. Vào repo trên GitHub
2. **Settings** → **Pages**
3. Mục **Build and deployment**:
   - **Source**: Chọn **GitHub Actions**
4. Save

### 4. Chờ deploy tự động

- Vào tab **Actions** trong repo
- Sẽ thấy workflow "Deploy to GitHub Pages" đang chạy
- Chờ job chạy xanh ✅ (khoảng 1-2 phút)

### 5. Truy cập website

URL sẽ là: `https://<username>.github.io/`

---

## 🔄 Update sau này

Mỗi khi bạn update code:

```bash
git add .
git commit -m "Update: mô tả thay đổi"
git push
```

→ GitHub Actions sẽ tự động build và deploy!

---

## 🐛 Troubleshooting

### Trang trắng / 404
- Kiểm tra `package.json` có `"homepage": "/"`
- Kiểm tra repo name phải là `<username>.github.io`

### Workflow failed
- Vào **Actions** tab, click vào job bị fail để xem lỗi
- Thường do: thiếu dependencies, lỗi build

### Dark/Light mode không hoạt động
- Kiểm tra localStorage có bị chặn không
- Mở Console (F12) xem có error không

---

## 📞 Cần giúp đỡ?

Check workflow logs tại: `https://github.com/<username>/<username>.github.io/actions`
