Cookies in JavaScript are small pieces of data stored on the user's computer by the web browser, typically used to remember information between pages or visits—like user preferences, login sessions, or tracking activity.

### 📦 Basics of Cookies in JavaScript

#### 1. **Creating/Setting a Cookie**

```js
document.cookie = "username=JohnDoe";
```

This sets a cookie called `username` with the value `JohnDoe`.

#### 2. **Setting Expiration**

By default, cookies are deleted when the browser is closed. To keep them longer, you can set an expiration date:

```js
document.cookie = "username=JohnDoe; expires=Fri, 10 Aug 2025 12:00:00 UTC";
```

#### 3. **Setting Path**

You can limit the cookie to a specific path:

```js
document.cookie = "username=JohnDoe; path=/dashboard";
```

#### 4. **Reading Cookies**

```js
console.log(document.cookie);
```

Returns all cookies for the current page as a single string:

```
"username=JohnDoe; theme=dark"
```

You’ll need to parse this string manually or with helper functions.

#### 5. **Deleting a Cookie**

To delete a cookie, set its expiry date to a past date:

```js
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
```

---

### ⚠️ Cookie Limitations

- Max size: \~4 KB per cookie
- Max number: \~20–50 cookies per domain (browser dependent)
- Only accessible by the domain that set them
- Can be marked **HttpOnly** or **Secure** (set via server, not JS)

---

### 🔒 Security Notes

JavaScript **cannot access HttpOnly cookies**, which are used for authentication tokens. This helps prevent XSS attacks.

---

### ✅ Use Cases

- Remembering login sessions (via server-set cookies)
- Saving user preferences like theme or language
- Tracking usage analytics (though modern alternatives like `localStorage` or `sessionStorage` are often better)

Would you like a quick comparison between cookies, `localStorage`, and `sessionStorage`?
