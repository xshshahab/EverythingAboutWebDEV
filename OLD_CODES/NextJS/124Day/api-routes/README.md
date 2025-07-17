Api Routes in Next Js

# important point

```bash
return NextResponse.json({ success: true, data });
return NextResponse.json({ success: true, data: data });
```

in this code you passed `data:data` but when the type is `json` you should pass `data` only not `data:data`
