let RECORD_ID;
let uploadButton = document.getElementById("upload");

/**
 * @description - This function is used to fetch the record from the database with the given input.
 */

(async () => {
  console.log("Init");
  ZOHO.embeddedApp.on("PageLoad", async function (data) {
    console.log(data);
    RECORD_ID = data.EntityId;

    uploadButton.addEventListener("click", () => {
      console.log("Uploading a file");

      const file = new File(["foo"], "foo.txt", {
        type: "text/plain",
      });

      const formData = new FormData();
      formData.append("filename", "Test");
      formData.append("parent_id", "eyaq960141933fde445b1b86f27d36a41cb35");
      formData.append("content", file);

      var data = {
        filename: "Test",
        parent_id: "eyaq960141933fde445b1b86f27d36a41cb35",
        "override- name - exist": "true",
        content: file,
      };

      console.log();
      var request = {
        url: "https://www.zohoapis.com/workdrive/api/v1/upload",
        headers: {
          Accept: "application/vnd.api+json",
          Authorization:
            "Zoho-oauthtoken 1000.ab0c26aef8530786427b05c29b26c1e4.ac927761475e51ee8502d1fb9f3274a8",
        },
        body: formData,
      };
      console.log(request);
      //   ZOHO.CRM.HTTP.post(request)
      //     .then(function (data) {
      //       console.log(data);
      //     })
      //     .catch(function (data) {
      //       console.log(data);
      //     });

      fetch("https://www.zohoapis.com/workdrive/api/v1/upload", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/vnd.api+json",
          Authorization:
            "Zoho-oauthtoken 1000.b21d3e13b003b1edc9f6a8d5ddf4d4f8.00e81d4e8ff401f0788df034707a7faa",
        },
      }).then((res) => {
        console.log(res);
      });
    });
  });
  /*
   * initializing the widget.
   */
  ZOHO.embeddedApp.init();
})();
