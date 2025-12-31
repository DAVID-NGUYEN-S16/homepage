# ⚡ QUICK START - Deploy trong 10 phút

## 🎯 Mục tiêu
Deploy homepage lên **Cloudflare Pages** với **private repo** (không ai thấy source code)

---

## ✅ CHECKLIST - Làm theo thứ tự

### [ ] 1. Tạo GitHub Private Repo (2 phút)
```
→ https://github.com/new
→ Repository name: homepage (hoặc tên bạn thích)
→ QUAN TRỌNG: Chọn "Private" 🔒
→ Create repository
```

### [ ] 2. Push Code lên GitHub (2 phút)
```bash
cd /Users/Shared/home_page

git init
git add .
git commit -m "Initial commit: Homepage with dark/light mode"
git branch -M main

# THAY <username> bằng GitHub username của bạn!
git remote add origin https://github.com/<username>/homepage.git

git push -u origin main
```

**✅ Xong bước này: Source code đã PRIVATE trên GitHub!**

---

### [ ] 3. Đăng ký Cloudflare (1 phút)
```
→ https://dash.cloudflare.com/sign-up
→ Đăng ký miễn phí
→ Verify email
```

### [ ] 4. Connect GitHub & Deploy (5 phút)

#### a) Tạo Pages Project
```
→ Dashboard: https://dash.cloudflare.com/
→ Workers & Pages (menu trái)
→ Create application
→ Tab "Pages"
→ Connect to Git
```

#### b) Authorize GitHub
```
→ Connect GitHub
→ Authorize Cloudflare
→ "Only select repositories"
→ Chọn repo "homepage"
→ Install & Authorize
```

#### c) Configure Build
```
Project name: homepage
Production branch: main
Build command: npm run build
Build output: build
```

#### d) Deploy!
```
→ Save and Deploy
→ Chờ 1-2 phút
→ ✅ DONE!
```

---

## 🎉 Hoàn thành!

Website của bạn sẽ có URL:
```
https://<project-name>.pages.dev
```

---

## 🔄 Update Website sau này

Chỉ cần:
```bash
git add .
git commit -m "Update: mô tả thay đổi"
git push
```

→ Cloudflare tự động deploy trong 1-2 phút!

---

## 📚 Tài liệu chi tiết

- 📖 Full guide: `CLOUDFLARE_DEPLOY_GUIDE.md`
- 🔧 Troubleshooting: Xem trong full guide

---

## 🆘 Cần giúp?

Check deployment logs tại:
```
Cloudflare Dashboard → Pages → <project> → Deployments
```
