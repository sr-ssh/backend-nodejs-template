define({ "api": [
  {
    "type": "get",
    "url": "/api/user/v1/pay",
    "title": "pay",
    "version": "1.0.0",
    "name": "pay",
    "description": "<p>pay : if the online pay was unsuccessfull , there will be no &quot;payURl&quot;.</p>",
    "group": "user",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"پرداخت با موفقیت انجام شد\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/home.js",
    "groupTitle": "user"
  }
] });
