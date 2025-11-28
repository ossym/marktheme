# CSS Build System

## تقسيم CSS إلى ملفين منفصلين

### الملفات:

1. **`bootstrap.css`** - للصفحات العامة (Guest Mode)
   - signin.twig
   - signup.twig
   - resetpassword.twig
   - setnewpassword.twig
   - confirmemail.twig
   - 2fa.twig
   - terms.twig
   - faq.twig
   - blog.twig
   - blogpost.twig
   - newpage.twig

2. **`style.css`** - للصفحات الخاصة (Auth Mode)
   - neworder.twig
   - orders.twig
   - addfunds.twig
   - account.twig
   - api.twig
   - tickets.twig
   - services.twig
   - massorder.twig
   - drip_feed.twig
   - subscriptions.twig
   - refunds.twig
   - notifications.twig
   - affiliates.twig
   - updates.twig
   - child_panel.twig

## الأوامر:

```bash
# بناء الملفين معاً
npm run build:css

# بناء bootstrap.css فقط (Guest pages)
npm run build:css:guest

# بناء style.css فقط (Auth pages)
npm run build:css:auth

# Watch mode للاثنين
npm run watch:css

# Watch mode لـ bootstrap.css فقط
npm run watch:css:guest

# Watch mode لـ style.css فقط
npm run watch:css:auth
```

## ملاحظات:

- `bootstrap.css` يتم توليده من `input.css` + `tailwind.config.guest.js`
- `style.css` يتم توليده من `input-auth.css` + `tailwind.config.auth.js`
- كل ملف يحتوي فقط على Tailwind classes المستخدمة في الصفحات المحددة
- هذا يجعل الملفات أصغر وأسرع في التحميل

