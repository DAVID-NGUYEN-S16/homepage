# 📋 Copy-Paste Commands

## 🔹 Lần đầu deploy (chạy 1 lần)

**Bước 1: Khởi tạo Git**
```bash
cd /Users/Shared/home_page
git init
git add .
git commit -m "Initial commit: Homepage with dark/light mode"
git branch -M main
```

**Bước 2: Connect GitHub**
```bash
# THAY <username> bằng GitHub username của bạn!
# VD: git remote add origin https://github.com/john123/homepage.git

git remote add origin https://github.com/<username>/homepage.git
```

**Bước 3: Push lên GitHub**
```bash
git push -u origin main
```

---

## 🔹 Update website (dùng mỗi lần có thay đổi)

```bash
git add .
git commit -m "Update: mô tả thay đổi ở đây"
git push
```

**Ví dụ commit messages:**
- `"Update: fix dark mode highlight color"`
- `"Update: add new research section"`
- `"Fix: responsive layout on mobile"`

---

## 🔹 Các lệnh Git hữu ích

**Xem trạng thái files:**
```bash
git status
```

**Xem lịch sử commits:**
```bash
git log --oneline
```

**Hủy changes chưa commit:**
```bash
git checkout -- .
```

**Xem remote URL:**
```bash
git remote -v
```

---

## 🔹 Build & Test local (trước khi push)

**Chạy development server:**
```bash
npm start
```

**Build production:**
```bash
npm run build
```

**Test build local:**
```bash
npm install -g serve
serve -s build
```

---

## 🆘 Lỗi thường gặp

### Lỗi: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/<username>/homepage.git
```

### Lỗi: "Authentication failed"
- Dùng GitHub Personal Access Token thay vì password
- Hoặc setup SSH key

### Lỗi: Build failed trên Cloudflare
1. Build thử local: `npm run build`
2. Fix lỗi local trước
3. Push lại
