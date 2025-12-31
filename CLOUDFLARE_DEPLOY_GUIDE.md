# 🚀 Deploy lên Cloudflare Pages (Private Repo)

## ✅ Ưu điểm Cloudflare Pages:
- ✅ **MIỄN PHÍ** hoàn toàn
- ✅ **HỖ TRỢ PRIVATE REPO** (GitHub, GitLab)
- ✅ Auto deploy khi push code
- ✅ Unlimited bandwidth
- ✅ Cực nhanh (Cloudflare CDN toàn cầu)
- ✅ Free SSL + Custom domain
- ✅ URL: `https://<project-name>.pages.dev`

---

## 📝 DEPLOYMENT PLAN

### **Bước 1: Tạo GitHub Private Repo**

1. Truy cập: https://github.com/new
2. **Repository name**: `homepage` (tên gì cũng được)
3. **Visibility**: Chọn **Private** 🔒
4. Click **Create repository**

---

### **Bước 2: Push code lên GitHub Private Repo**

```bash
# Khởi tạo git
git init

# Add tất cả files
git add .

# Commit
git commit -m "Initial commit: Homepage with dark/light mode"

# Đổi branch sang main
git branch -M main

# Add remote (THAY <username> và <repo-name> của bạn!)
git remote add origin https://github.com/<username>/homepage.git

# Push lên private repo
git push -u origin main
```

✅ **Source code của bạn giờ đã private!**

---

### **Bước 3: Tạo Cloudflare account & Deploy**

#### 3.1 Đăng ký Cloudflare
1. Truy cập: https://dash.cloudflare.com/sign-up
2. Đăng ký miễn phí (dùng email)
3. Verify email

#### 3.2 Tạo Pages Project
1. Vào Dashboard: https://dash.cloudflare.com/
2. Click **Workers & Pages** (menu bên trái)
3. Click **Create application**
4. Chọn tab **Pages**
5. Click **Connect to Git**

#### 3.3 Connect GitHub
1. Click **Connect GitHub**
2. Authorize Cloudflare (cho phép truy cập repos)
3. Chọn **Only select repositories**
4. Chọn repo `homepage` (private repo của bạn)
5. Click **Install & Authorize**

#### 3.4 Configure Build Settings
Cloudflare sẽ tự detect Create React App, nhưng để chắc:

```
Project name: homepage (hoặc tên bạn muốn)
Production branch: main
Build command: npm run build
Build output directory: build
```

**Root directory**: để trống (nếu code ở root)

#### 3.5 Deploy!
1. Click **Save and Deploy**
2. Chờ build (1-2 phút)
3. Thành công! ✅

---

### **Bước 4: Truy cập Website**

URL sẽ là: `https://<project-name>.pages.dev`

VD: `https://homepage-abc.pages.dev`

---

## 🔄 Auto Deploy

Từ giờ, **mỗi khi bạn push code**:

```bash
git add .
git commit -m "Update: thêm feature mới"
git push
```

→ Cloudflare Pages sẽ **tự động build và deploy** trong 1-2 phút! 🎉

---

## 🎨 Custom Domain (Tùy chọn)

Nếu bạn có domain riêng (vd: `yourdomain.com`):

1. Vào Pages project → **Custom domains**
2. Add domain
3. Follow hướng dẫn update DNS
4. Free SSL tự động!

---

## 🐛 Troubleshooting

### Build failed
- Vào **Deployments** → click vào deployment bị fail
- Xem **Build logs** để biết lỗi

### Trang trắng
- Kiểm tra `package.json` có `"homepage": "/"`
- Kiểm tra build output directory là `build`

### Cần rollback
- Vào **Deployments**
- Click **Rollback** trên deployment cũ

---

## 🔒 Bảo mật

- ✅ Source code **PRIVATE** trên GitHub
- ✅ Chỉ có **build output** được deploy public
- ✅ Không ai thấy được source code React của bạn!

---

## 📊 So sánh với GitHub Pages

| Feature | Cloudflare Pages | GitHub Pages |
|---------|------------------|--------------|
| Private repo | ✅ FREE | ❌ Cần GitHub Pro |
| Speed | ⚡ Rất nhanh (CDN) | 🐌 Chậm hơn |
| Bandwidth | ♾️ Unlimited | ⚠️ 100GB/tháng |
| Build time | ~1 phút | ~2-3 phút |
| Custom domain | ✅ Free SSL | ✅ Free SSL |

---

## 💡 Preview Deployments

**Bonus**: Cloudflare Pages tự động tạo preview URL cho mỗi Pull Request!

---

## 🎯 Next Steps

1. Tạo GitHub private repo
2. Push code
3. Connect Cloudflare Pages
4. Deploy!

**Ước tính thời gian**: 10-15 phút cho lần đầu setup
