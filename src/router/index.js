import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import JSEncrypt from 'jsencrypt/bin/jsencrypt'

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

function tets() {
  Vue.prototype.$jsEncrypt = JSEncrypt;
  let jse = new this.$jsEncrypt.JSEncrypt();
  let privateKeyString = "MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAIaCbXol2/XQzTBPnkDNgmOfalB+ZicE2ZItizbc2eOMSbGz9GepuRsLPKMz4/+oQtKwpuxPT9foE9bcQWijbIqh7eC76zeTbn9IewKR1VvoqgTXAmtjWJLA0diZKuINQL7zhKHwFIxB3/rfsIawLHGwpKr6vJ5AH7s/OS+5YpC9AgMBAAECgYBIZJoXS5j+y8ojXjaGGhU7GOlXOTAxf+K5UdnDRUnftflTss6vnCEL9RhFnf/v8NdGHd05AdavFTDYSuLJNmuLyZYseg1w7b9ioQBTkjyFRxEUemAn2S7+oWsm3/NiLh5/wxly5PTFFxMTTptjmDeJfbXFSZzhV4D1UFtYm48b4QJBAL8YXLa/GrQWpDxxK/+GinskCVediSDllHD4nRU1VohO+NbdbDmOjbFz94W7d53zzm3m5M8SU6RYdVpEW9j2GNcCQQC0MfdU7+E38fPHccvA0NMkyEPC1Ggkq9am30TXUkGYGa22vmQ7qhhCF/qDe1e9bSwio0aNbXpc0kUhR3HCDwyLAkAm8OT7zIe5iR+gvYM0yAryOw64Tv8BuCb+unrwNnVSw50L1AVY2UbgkXwwQVqH0oYPeUzJMbfftrL7WRDKbqPzAkAmU1ZKr3aUgpaZ/f8bNI8kDKA06R55Zj8SYPxwW6Nt6VBERPxmoEfmjtkObAZ+WKEBgP65h+Z1pZdke6CbaL3/AkArf67UUo/wHOAN/upTsRPmVUItR414+NoQrVmI+OGPq/RHKEOhbZt8ylRydJcamG+xpsxHb85hMtjd2tYFnpVm";
  jse.setPrivateKey(privateKeyString);
// 解密加密过的字符串
  let encryptedData = "HgzExEc8hMAggLepCeHiEEd9z4/1/eaDCPEW19/ka6zKeqMSZWPupbgeTEOTSAj8lg1ZOjdv+2fBo/5kQzAbTdeRZhlYRL+q+wyoJLOYMtpXwDxI+BdiZJXp+hdPUUlZGD91UcEeoc3ho0IZP4YHnHRoq8qMKHud6inJiBygPE8=";
  let decrypted = jse.decrypt(encryptedData);
// 打印结果
  console.log(decrypted);
}

