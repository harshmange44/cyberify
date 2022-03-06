var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "ARTICLE": `  Permission to use content that you create and share: Some content that you share or upload, such as photos or videos, may be protected by intellectual property laws.
  You own the intellectual property rights (things such as copyright or trademarks) in any such content that you create and share on Facebook and other Meta Company Products you use. Nothing in these Terms takes away the rights you have to your own content. You are free to share your content with anyone else, wherever you want.
  However, to provide our services, we need you to give us some legal permissions (known as a ‘licence') to use this content. This is solely for the purposes of providing and improving our Products and services as described in Section 1 above.
  Specifically, when you share, post or upload content that is covered by intellectual property rights on or in connection with our Products, you grant us a non-exclusive, transferable, sub-licensable, royalty-free and worldwide licence to host, use, distribute, modify, run, copy, publicly perform or display, translate and create derivative works of your content (consistent with your privacy and application settings). This means, for example, that if you share a photo on Facebook, you give us permission to store, copy and share it with others (again, consistent with your settings) such as service providers that support our service or other Meta Products you use. This licence will end when your content is deleted from our systems.
  You can delete content individually or all at once by deleting your account. Learn more about how to delete your account. You can download a copy of your data at any time before deleting your account.
  When you delete content, it's no longer visible to other users; however, it may continue to exist elsewhere on our systems where:
      Immediate deletion is not possible due to technical limitations (in which case, your content will be deleted within a maximum of 90 days from when you delete it);
      your content has been used by others in accordance with this licence and they have not deleted it (in which case, this licence will continue to apply until that content is deleted); or
      Where immediate deletion would restrict our ability to:
          investigate or identify illegal activity or breaches of our Terms and Policies (for example, to identify or investigate misuse of our Products or systems);
          comply with a legal obligation, such as the preservation of evidence; or
          comply with a request of a judicial or administrative authority, law enforcement or a government agency; 
  in which case, the content will be retained for no longer than is necessary for the purposes for which it has been retained (the exact duration will vary on a case-by-case basis).
  In each of the above cases, this licence will continue until the content has been fully deleted.
  Permission to use your name, profile picture and information about your actions with ads and sponsored content: You give us permission to use your name and profile picture and information about actions that you have taken on Facebook next to or in connection with ads, offers and other sponsored content that we display across our Products, without any compensation to you. For example, we may show your friends that you are interested in an advertised event or have liked a Facebook Page created by a brand that has paid us to display its ads on Facebook. Ads like this can be seen only by people who have your permission to see the actions that you've taken on Meta Products. You can learn more about your ad settings and preferences.
  Permission to update software that you use or download: If you download or use our software, you give us permission to download and install updates to the software where available.`
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

// fetch("http://921c-34-74-47-59.ngrok.io/fastData", requestOptions)
//   .then(response => response.json())
//   .then(result => showData(result))
//   .catch(error => console.log('error', error));


fetch("http://921c-34-74-47-59.ngrok.io/slowData", requestOptions)
  .then(response => response.json())
  .then(result => showSlowData(result))
  .catch(error => console.log('error', error));


function showData(data) {
    console.log(data);
    document.getElementsByName("summary")[0].value = data.summary;
    document.getElementsByName("readScore")[0].value = data.readScore;
    document.getElementsByName("smogScore")[0].value = data.smogScore;
}

function yesOrNo(value) {
    console.log(value);
    if(value) return "   Yes";
    else return "   No";
}
showSlowData({});
function showSlowData(data) {
    document.getElementsByName("cookies")[0].value = yesOrNo(data.cookies);
    document.getElementsByName("personal")[0].value = yesOrNo(data.doesStorePersonalData);
    document.getElementsByName("world")[0].value = yesOrNo(data.dataAroundWorld);
    document.getElementsByName("activity")[0].value = yesOrNo(data.doTrackYour);

    
}
