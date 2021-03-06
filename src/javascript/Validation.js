var PluginPackage = function(){};
PluginPackage.prototype.FormValidation = function(){};
PluginPackage.prototype.Placehold = function(){};
PluginPackage.prototype.NumberOnly = function(){
  var _method = {};
  var _CustomMethod = {};
  var _setMethod;
  _method.target = $(".numbersonly");
  _setMethod = $.extend(_method, _CustomMethod);
  this.setCustomOPT = function(_OPT){
    _CustomMethod = _OPT;
  };
  var haveChinese = function(s) { 
    return s.search(  RegExp("[一-"+String.fromCharCode(40869)+"]") ) > -1;
  };
  var numbersonly = function(myfield, e, dec){
  var key;
  var keychar;
  if (window.event)
     key = window.event.keyCode;
  else if (e)
     key = e.which;
  else
     return true;
  keychar = String.fromCharCode(key);
  if (isNaN(keychar)) {
    return false;
  }
  if ((key===null) || (key===0) || (key==8) || 
      (key==9) || (key==13) || (key==27) || (key==46))
     return true;

  // numbers
  else if ((("0123456789").indexOf(keychar) > -1))
     return true;

  // decimal point jump
  else if (dec && (keychar == ".")){
     myfield.form.elements[dec].focus();
     return false;
    }
     else
        return false;
  };
  var numbersonlyKeyCheck = function(_target){
    _target.on("keydown",function(event){
      var c = $(this).val();
      var n = haveChinese(c);
      if( event.keyCode == 8 || event.keyCode == 9 || 
          event.keyCode == 13 || event.keyCode == 46 || 
          event.keyCode == 190 || event.keyCode == 37 || 
          event.keyCode == 38 || event.keyCode == 39 || 
          event.keyCode == 40 || event.keyCode == 96 || 
          event.keyCode == 97 || event.keyCode == 98 || 
          event.keyCode == 99 || event.keyCode == 100 || 
          event.keyCode == 101 || event.keyCode == 102 || 
          event.keyCode == 103 || event.keyCode == 104 || 
          event.keyCode == 105 || event.keyCode == 108){
        return true;
      }else if(n){
        return false;
      }
      return numbersonly(this, event);
    });
  };
  this.restrict = function(){
    _setMethod = $.extend(_method, _CustomMethod);
    numbersonlyKeyCheck(_setMethod.target);
  };
  this.getCustomMethod = function(){
    _setMethod = $.extend(_method, _CustomMethod);
    return _setMethod;
  };
};

PluginPackage.prototype.Message = function(){
  var _MESSAGE = [];
  _MESSAGE[0] = "不是中文";
  _MESSAGE[1] = "不是英文";
  _MESSAGE[2] = "請確認室內電話區碼是否正確";
  _MESSAGE[3] = "請確認室內電話是否正確";
  _MESSAGE[4] = "請確認行動電話號碼是否正確";
  _MESSAGE[5] = "請輸入行動電話號碼";
  this.alertMessage = function(_choose){
    return _MESSAGE[_choose];
  };
};

PluginPackage.prototype.FormValidation.prototype.Lib = function() {
  var Library = {};
  Library.TelAreaCode = {
    "02":{
      TELCodeNum: 8,
      area:["基隆市","台北市","台北縣"]
    },
    "03":{
      TELCodeNum: 8,
      area:["桃園縣","新竹市","新竹縣","宜蘭縣","花蓮縣"]
    },
    "37":{
      TELCodeNum: 7,
      area:["苗栗縣"]
    },
    "04":{
      TELCodeNum: 7,
      area:["台中市","台中縣","彰化縣"]
    },
    "049":{
      TELCodeNum: 7,
      area:["南投縣"]
    },
    "05":{
      TELCodeNum: 7,
      area:["雲林縣","嘉義市","嘉義縣"]
    },
    "06":{
    TELCodeNum: 7,
    area:["台南市","台南縣","澎湖縣"]
    },
    "07":{
    TELCodeNum: 7,
    area:["高雄市","高雄縣","東沙","南沙"]
    },
    "08":{
      TELCodeNum: 7,
      area:["屏東縣"]
    },
    "089":{
      TELCodeNum: 6,
      area:["台東縣"]
    },
    "082":{
      TELCodeNum: 6,
      area:["金門縣"]
    },
    "0836":{
      TELCodeNum: 5,
      area:["馬祖"]},
    "0826":{
      TELCodeNum: 5,
      area:["烏坵"]
    },
    "09":{
      TELCodeNum: 6,
      area:["CellPhone"]
    }
  };

  Library.Cityzip = {
    '基隆市': {'仁愛區': '200', '信義區': '201', '中正區': '202', '中山區': '203', '安樂區': '204', '暖暖區': '205', '七堵區': '206'},
    '台北市': {'中正區': '100', '大同區': '103', '中山區': '104', '松山區': '105', '大安區': '106', '萬華區': '108', '信義區': '110', '士林區': '111', '北投區': '112', '內湖區': '114','南港區': '115', '文山區': '116'},
    '新北市': {
      '萬里區': '207', '金山區': '208', '板橋區': '220', '汐止區': '221', '深坑區': '222', '石碇區': '223',
      '瑞芳區': '224', '平溪區': '226', '雙溪區': '227', '貢寮區': '228', '新店區': '231', '坪林區': '232',
      '烏來區': '233', '永和區': '234', '中和區': '235', '土城區': '236', '三峽區': '237', '樹林區': '238',
      '鶯歌區': '239', '三重區': '241', '新莊區': '242', '泰山區': '243', '林口區': '244', '蘆洲區': '247',
      '五股區': '248', '八里區': '249', '淡水區': '251', '三芝區': '252', '石門區': '253'
    },
    '宜蘭縣': {
      '宜蘭市': '260', '頭城鎮': '261', '礁溪鄉': '262', '壯圍鄉': '263', '員山鄉': '264', '羅東鎮': '265',
      '三星鄉': '266', '大同鄉': '267', '五結鄉': '268', '冬山鄉': '269', '蘇澳鎮': '270', '南澳鄉': '272',
      '釣魚台列嶼': '290'
    },
    '新竹市': {'東區': '300', '北區': '300', '香山區': '300'},
    '新竹縣': {
      '竹北市': '302', '湖口鄉': '303', '新豐鄉': '304', '新埔鎮': '305', '關西鎮': '306', '芎林鄉': '307',
      '寶山鄉': '308', '竹東鎮': '310', '五峰鄉': '311', '橫山鄉': '312', '尖石鄉': '313', '北埔鄉': '314',
      '峨嵋鄉': '315'
    },
    '桃園市': {
      '中壢區': '320', '平鎮區': '324', '龍潭區': '325', '楊梅區': '326', '新屋區': '327', '觀音區': '328',
      '桃園區': '330', '龜山區': '333', '八德區': '334', '大溪區': '335', '復興區': '336', '大園區': '337',
      '蘆竹區': '338'
    },
    '苗栗縣': {
      '竹南鎮': '350', '頭份鎮': '351', '三灣鄉': '352', '南庄鄉': '353', '獅潭鄉': '354', '後龍鎮': '356',
      '通霄鎮': '357', '苑裡鎮': '358', '苗栗市': '360', '造橋鄉': '361', '頭屋鄉': '362', '公館鄉': '363',
      '大湖鄉': '364', '泰安鄉': '365', '銅鑼鄉': '366', '三義鄉': '367', '西湖鄉': '368', '卓蘭鎮': '369'
    },
    '台中市': {
      '中區': '400', '東區': '401', '南區': '402', '西區': '403', '北區': '404', '北屯區': '406', '西屯區': '407', '南屯區': '408',
      '太平區': '411', '大里區': '412', '霧峰區': '413', '烏日區': '414', '豐原區': '420', '后里區': '421',
      '石岡區': '422', '東勢區': '423', '和平區': '424', '新社區': '426', '潭子區': '427', '大雅區': '428',
      '神岡區': '429', '大肚區': '432', '沙鹿區': '433', '龍井區': '434', '梧棲區': '435', '清水區': '436',
      '大甲區': '437', '外埔區': '438', '大安區': '439'
    },
    '彰化縣': {
      '彰化市': '500', '芬園鄉': '502', '花壇鄉': '503', '秀水鄉': '504', '鹿港鎮': '505', '福興鄉': '506',
      '線西鄉': '507', '和美鎮': '508', '伸港鄉': '509', '員林鎮': '510', '社頭鄉': '511', '永靖鄉': '512',
      '埔心鄉': '513', '溪湖鎮': '514', '大村鄉': '515', '埔鹽鄉': '516', '田中鎮': '520', '北斗鎮': '521',
      '田尾鄉': '522', '埤頭鄉': '523', '溪州鄉': '524', '竹塘鄉': '525', '二林鎮': '526', '大城鄉': '527',
      '芳苑鄉': '528', '二水鄉': '530'
    },
    '南投縣': {
      '南投市': '540', '中寮鄉': '541', '草屯鎮': '542', '國姓鄉': '544', '埔里鎮': '545', '仁愛鄉': '546',
      '名間鄉': '551', '集集鎮': '552', '水里鄉': '553', '魚池鄉': '555', '信義鄉': '556', '竹山鎮': '557',
      '鹿谷鄉': '558'
    },
    '嘉義市': {'東區': '600', '西區': '600'},
    '嘉義縣': {
      '番路鄉': '602', '梅山鄉': '603', '竹崎鄉': '604', '阿里山': '605', '中埔鄉': '606', '大埔鄉': '607',
      '水上鄉': '608', '鹿草鄉': '611', '太保市': '612', '朴子市': '613', '東石鄉': '614', '六腳鄉': '615',
      '新港鄉': '616', '民雄鄉': '621', '大林鎮': '622', '溪口鄉': '623', '義竹鄉': '624', '布袋鎮': '625'
    },
    '雲林縣': {
      '斗南鎮': '630', '大埤鄉': '631', '虎尾鎮': '632', '土庫鎮': '633', '褒忠鄉': '634', '東勢鄉': '635',
      '臺西鄉': '636', '崙背鄉': '637', '麥寮鄉': '638', '斗六市': '640', '林內鄉': '643', '古坑鄉': '646',
      '莿桐鄉': '647', '西螺鎮': '648', '二崙鄉': '649', '北港鎮': '651', '水林鄉': '652', '口湖鄉': '653',
      '四湖鄉': '654', '元長鄉': '655'
    },
    '台南市': {
      '中西區': '700', '東區': '701', '南區': '702', '北區': '704', '安平區': '708', '安南區': '709',
      '永康區': '710', '歸仁區': '711', '新化區': '712', '左鎮區': '713', '玉井區': '714', '楠西區': '715',
      '南化區': '716', '仁德區': '717', '關廟區': '718', '龍崎區': '719', '官田區': '720', '麻豆區': '721',
      '佳里區': '722', '西港區': '723', '七股區': '724', '將軍區': '725', '學甲區': '726', '北門區': '727',
      '新營區': '730', '後壁區': '731', '白河區': '732', '東山區': '733', '六甲區': '734', '下營區': '735',
      '柳營區': '736', '鹽水區': '737', '善化區': '741', '大內區': '742', '山上區': '743', '新市區': '744',
      '安定區': '745'
    },
    '高雄市': {
      '新興區': '800', '前金區': '801', '苓雅區': '802', '鹽埕區': '803', '鼓山區': '804', '旗津區': '805',
      '前鎮區': '806', '三民區': '807', '楠梓區': '811', '小港區': '812', '左營區': '813',
      '仁武區': '814', '大社區': '815', '岡山區': '820', '路竹區': '821', '阿蓮區': '822', '田寮鄉': '823',
      '燕巢區': '824', '橋頭區': '825', '梓官區': '826', '彌陀區': '827', '永安區': '828', '湖內鄉': '829',
      '鳳山區': '830', '大寮區': '831', '林園區': '832', '鳥松區': '833', '大樹區': '840', '旗山區': '842',
      '美濃區': '843', '六龜區': '844', '內門區': '845', '杉林區': '846', '甲仙區': '847', '桃源區': '848',
      '那瑪夏區': '849', '茂林區': '851', '茄萣區': '852'
    },
    '屏東縣': {
      '屏東市': '900', '三地門': '901', '霧臺鄉': '902', '瑪家鄉': '903', '九如鄉': '904', '里港鄉': '905',
      '高樹鄉': '906', '鹽埔鄉': '907', '長治鄉': '908', '麟洛鄉': '909', '竹田鄉': '911', '內埔鄉': '912',
      '萬丹鄉': '913', '潮州鎮': '920', '泰武鄉': '921', '來義鄉': '922', '萬巒鄉': '923', '崁頂鄉': '924',
      '新埤鄉': '925', '南州鄉': '926', '林邊鄉': '927', '東港鎮': '928', '琉球鄉': '929', '佳冬鄉': '931',
      '新園鄉': '932', '枋寮鄉': '940', '枋山鄉': '941', '春日鄉': '942', '獅子鄉': '943', '車城鄉': '944',
      '牡丹鄉': '945', '恆春鎮': '946', '滿州鄉': '947'
    },
    '台東縣': {
      '臺東市': '950', '綠島鄉': '951', '蘭嶼鄉': '952', '延平鄉': '953', '卑南鄉': '954', '鹿野鄉': '955',
      '關山鎮': '956', '海端鄉': '957', '池上鄉': '958', '東河鄉': '959', '成功鎮': '961', '長濱鄉': '962',
      '太麻里鄉': '963', '金峰鄉': '964', '大武鄉': '965', '達仁鄉': '966'
    },
    '花蓮縣': {
      '花蓮市': '970', '新城鄉': '971', '秀林鄉': '972', '吉安鄉': '973', '壽豐鄉': '974', '鳳林鎮': '975',
      '光復鄉': '976', '豐濱鄉': '977', '瑞穗鄉': '978', '萬榮鄉': '979', '玉里鎮': '981', '卓溪鄉': '982',
      '富里鄉': '983'
    },
    '金門縣': {'金沙鎮': '890', '金湖鎮': '891', '金寧鄉': '892', '金城鎮': '893', '烈嶼鄉': '894', '烏坵鄉': '896'},
    '連江縣': {'南竿鄉': '209', '北竿鄉': '210', '莒光鄉': '211', '東引鄉': '212'},
    '澎湖縣': {'馬公市': '880', '西嶼鄉': '881', '望安鄉': '882', '七美鄉': '883', '白沙鄉': '884', '湖西鄉': '885'},
    '南海諸島': {'東沙': '817', '南沙': '819'}
    };
  Library.AddressFormat = {
    cityCheck:["縣","市"],
    areaCheck:["鄉","鎮","區"],
    villageCheck:["村","里"],
    streetCheck:["路","大道","街"],
    neighborCheck:["鄰"],
    detailCheck:["巷","弄","號","樓"]
  };
  this.getMethod = function (){
    return Library;
  };
};


PluginPackage.prototype.FormValidation.prototype.name = function(){
  var _pluginPack = new PluginPackage();
  var _Message = new _pluginPack.Message();
  var _method = {};
  var _CustomMethod = {};
  var _setMethod;

  _method.target = $('input[valid="name"]');
  _method.langRestrict = "Zh-TW";  //  "En" , "Zh-TW"
  _method.minLengthRestrict = 2;
  _method.maxLengthRestrict = 5;

  var RegZhTW = function(val){
    var RegExpStr = /^[\u0391-\uFFE5]+$/;
    var Reg = new RegExp(RegExpStr);
    return Reg.test(val);
  };
  var RegEn = function(val){
    var RegExpStr = /^[a-zA-z]+$/;
    var Reg = new RegExp(RegExpStr);
    return Reg.test(val);
  };
  var judgeLang = function(_lang,_val){
    switch(_lang){      
      case "Zh-TW":
      if(!RegZhTW(_val)){
        alert(Message.alertMessage(0));
        return false;
      }
      break;
      case "en":
      if(!RegEn(_val)){
        alert(_Message.alertMessage(1));
        return false;
      }
      break;
    }
    return true;
  };
  var checkStrLength = function(_val){
    if (_val.length < _setMethod.minLengthRestrict || _val.length > _setMethod.maxLengthRestrict) {
      alert("姓名輸入的字數請介於 "+ _setMethod.minLengthRestrict +" 字 至 "+_setMethod.maxLengthRestrict+" 字 之間");
      return false;
    }else return true;
  };

  this.setCustomOPT = function(_OPT){
    _CustomMethod = _OPT;
  };
  this.validation = function(){
    _setMethod = $.extend(_method, _CustomMethod);
    var _value = _setMethod.target.val();
    if(checkStrLength(_value) && judgeLang(_setMethod.langRestrict,_value)) {return true;}else return false;
  };
  this.getCustomMethod = function(){
    _setMethod = $.extend(_method, _CustomMethod);
    return _setMethod;
  };
};


PluginPackage.prototype.FormValidation.prototype.phoneValid = function(){
  var _pluginPack = new PluginPackage();
  var _Message = new _pluginPack.Message();
  var _formvalid = new _pluginPack.FormValidation();
  var _validAdd = new _formvalid.addressValid();
  var _addressMethod = new _validAdd.getCustomMethod();
  var _lib = new _formvalid.Lib();
  var _method = {};
  var _CustomMethod = {};
  var _setMethod;
  _method.target = $('input[valid="phone"]');
  _method.restrictMode = "Hybrid";  // "Hybrid" , "Tel" , "Phone"
  _method.numberOnly = false; // 還沒寫
  _method.detailCheck = true;
  _method.chineseNumAllow = false; // 還沒寫
  _method.callback = "";
  var extentFunction = function(_Custom){
    if(_Custom.numberOnly){
      var numonly = new _pluginPack.NumberOnly();
      numonly.setCustomOPT({
        target: _Custom.target
      });
      numonly.restrict();
    }
    if(_Custom.chineseNumAllow){
      console.log("chineseNumAllow");
    }
    if(_Custom.callback){
      _Custom.callback();
    }
  };


  var judgePhoneNumber = function(_val,_setMethod){
    var result = false;
    if(_val.indexOf("(") === 0 && _val.indexOf(")") != -1){
      var inputAreaCode = _val.substr(_val.indexOf("(") + 1 , _val.indexOf(")")-1 );
      $.each(_lib.getMethod().TelAreaCode , function(areaCode,areaContain){
        if(inputAreaCode == areaCode){
          var teltailMixNum = areaContain.TELCodeNum;
          if(_val.substr(_val.indexOf(")")+1,_val.length).replace("-","").length >= teltailMixNum ){
            if(_setMethod.detailCheck){
              var addressValue = _addressMethod.target.val();
              var areaCodeCompare = false;
              for(var i = 0; i < areaContain.area.length; i++){
                if(addressValue.indexOf(areaContain.area[i]) != -1){
                  areaCodeCompare = true;
                }
              }
              if(areaCodeCompare){
                result = true;
              }else{
                alert("您所輸入的電話區碼處與你的居住縣市不匹配");
                result = false;
              }
            }else{
              result = true;
            }
          }else{
            alert(_Message.alertMessage(3));
            result = false;
          }
        }
      });
      if(inputAreaCode == "00" || inputAreaCode == "01"){
        alert(_Message.alertMessage(2));
        result = false;
      }
      return result;
    }else if(_val.substr(0,2) == "09"){
      if(_val.indexOf("-") == 4){
        var phoneTail = _val.substr(_val.indexOf("-")+1,_val.length);
          if(phoneTail.replace("-","").length == 6){
            return true;
          }else{
            alert(_Message.alertMessage(4));
            return false;
          }
      }
    }else if(_val.length === 0 ){
      alert(_Message.alertMessage(5));
      return result;
    }
  };


  this.setCustomOPT = function(_OPT){
    _CustomMethod = _OPT;
    _setMethod = $.extend(_method, _CustomMethod);
    extentFunction(_setMethod);
  };


  this.restrictMode = function() {
    _setMethod = $.extend(_method, _CustomMethod);
    var _target = _setMethod.target;
    var _spAreaCode = [""];
    var _keepCheck;
    var _outCheck;
    var _makeSign = function (str,num){
      str = str.substr(0,num)+")"+str.substr(num,str.length-1);
      str = "(" + str;
      return(str);
    };
    var _makeSignDash = function (str,num){
      // 驗證4碼區碼的dash位置
      if(str.substr(str.indexOf("(") + 1,str.indexOf(")") - 1).length == 4 ){
        str = str.substr(0,str.indexOf(")") + 1)+"-"+str.substr(str.indexOf(")") + 1,str.length-1);
      }else{
        str = str.substr(0,num)+"-"+str.substr(num,str.length-1);
      }
      return(str);
    };
    var _deleteTooLong = function (str,num){
      str = str.substr(0,num);
      return(str);
    };
    switch(_setMethod.restrictMode)
    {
      case "Hybrid": 
        _outCheck = function (){
          var str = _target.val();
          if(str.length > 1){
            if(str.charAt(0) == "0"){
              if(str.charAt(1) != "9"){
                 var tmp3 = str.substr(0,3);
                 var tmp4 = str.substr(0,4);
                 if(tmp3 == "037" || tmp3 == "049" || tmp3 == "082" || tmp3 == "089"){
                   //更新3碼 
                   str = _makeSign(str,3);
                   str = _makeSignDash(str,8);
                 }else if(tmp4 == "0836"){
                   //更新4碼 
                   str = _makeSign(str,4);
                   str = _makeSignDash(str,9);
                 }else{
                   //更新兩碼 
                   str = _makeSign(str,2);
                   str = _makeSignDash(str,8);
                 } 
              }
              else{
                 var tmp2 = str.substr(0,2);
                 if(tmp2 == "09"){
                    str = _makeSignDash(str,4);
                    str = _makeSignDash(str,8);}}}
          }else{
            str = "";
          }
          _target.val(str);
        };
        //持續檢測
        _keepCheck = function (){
          var str = _target.val();
          var finishStr = str.replace(/\(|\)|\-|\D/gi,"");
          var firstTwo = str.substr(0,2);
          if(str.length >= 1){
            if(finishStr.charAt(0) != "0"){finishStr = "0"+finishStr;}
            if(finishStr.charAt(1) != "9"){
              var tmp3 = finishStr.substr(0,3);
              var tmp4 = finishStr.substr(0,4);
              if(tmp3 == "039" || tmp3 == "049" || tmp3 == "082" || tmp3 == "089"){
                //更新3碼 
                finishStr = _deleteTooLong(finishStr,10);
              }else if(tmp4 == "0836"){
                //更新4碼 
                finishStr = _deleteTooLong(finishStr,10);
              }else{
                //更新兩碼 
                finishStr = _deleteTooLong(finishStr,10);
              } 
            }
            //手機
            else{
              var tmp2 = finishStr.substr(0,2);
              if(tmp2 == "09"){
                finishStr = _deleteTooLong(finishStr,10);
              }     
            }
        }_target.val(finishStr);
        };
        _target.keyup(function(e){if(e.keyCode == 37 || e.keyCode == 39){}else{_keepCheck();}});
        _target.focus(function(){_keepCheck();});
        _target.keypress(function(e){if(e.which == 13) {_outCheck(); }});
        _target.focusout(function(){_outCheck();});
      break;
      case "Tel": 
        _outCheck = function (){
          var str = _target.val();
          if(str.length > 1){
            if(str.charAt(0) == "0"){
              if(str.charAt(1) != "9"){
                var tmp3 = str.substr(0,3);
                var tmp4 = str.substr(0,4);
                if(tmp3 == "037" || tmp3 == "049" || tmp3 == "082" || tmp3 == "089"){
                  str = _makeSign(str,3);
                  str = _makeSignDash(str,8);
                }else if(tmp4 == "0836"){
                  str = _makeSign(str,4);
                  str = _makeSignDash(str,9);
                }else{
                  str = _makeSign(str,2);
                  str = _makeSignDash(str,8);
                } 
              }
            }
          }else{
            str = "";
          }
          _target.val(str);
        };
        _keepCheck = function (){
          var str = _target.val();
          var finishStr = str.replace(/\(|\)|\-|\D/gi,"");
          var firstTwo = str.substr(0,2);
          if(str.length >= 1){
            if(finishStr.charAt(0) != "0"){finishStr = "0"+finishStr;}
            if(finishStr.charAt(1) != "9"){
              var tmp3 = finishStr.substr(0,3);
              var tmp4 = finishStr.substr(0,4);
              if(tmp3 == "039" || tmp3 == "049" || tmp3 == "082" || tmp3 == "089"){
                finishStr = _deleteTooLong(finishStr,10);
              }else if(tmp4 == "0836"){
                finishStr = _deleteTooLong(finishStr,10);
              }else{
                finishStr = _deleteTooLong(finishStr,10);
              } 
            }
          }
        _target.val(finishStr);
        };
        _target.keyup(function(e){if(e.keyCode == 37 || e.keyCode == 39){}else{_keepCheck();}});
        _target.focus(function(){_keepCheck();});
        _target.keypress(function(e){if(e.which == 13) {_outCheck(); }});
        _target.focusout(function(){_outCheck();});      
      break;
      case "Phone": 
        _outCheck = function (){
          var str = _target.val();
          if(str.length > 1){
            if(str.charAt(0) == "0"){
              if(str.charAt(1) == "9"){
                var tmp2 = str.substr(0,2);
                if(tmp2 == "09"){
                  str = _makeSignDash(str,4);
                  str = _makeSignDash(str,8);
                }
              }
            }
          }else{
            str = ""; 
          }
          _target.val(str);};
        _keepCheck = function (){
          var str = _target.val();
          var finishStr = str.replace(/\(|\)|\-|\D/gi,"");
          var firstTwo = str.substr(0,2);
          if(str.length >= 1){
            if(finishStr.charAt(0) != "0"){finishStr = "0" + finishStr;}
              var tmp2 = finishStr.substr(0,2);
              if(tmp2 != "09"){
                finishStr = _deleteTooLong(finishStr,1);
              }     
              finishStr = _deleteTooLong(finishStr,10);
              _target.val(finishStr);
          }
        };

        _target.keyup(function(e){if(e.keyCode == 37 || e.keyCode == 39){}else{_keepCheck();}});
        _target.focus(function(){_keepCheck();});
        _target.keypress(function(e){if(e.which == 13) {_outCheck(); }});
        _target.focusout(function(){_outCheck();});
      break;
    }};


  this.validation = function(){
    _setMethod = $.extend(_method, _CustomMethod);
    var _value = _setMethod.target.val();
    return judgePhoneNumber(_value,_setMethod);
  };
  this.getCustomMethod = function(){
    _setMethod = $.extend(_method, _CustomMethod);
    return _setMethod;
  };
};



PluginPackage.prototype.FormValidation.prototype.addressValid = function(){
  var _pluginPack = new PluginPackage();
  var _Message = new _pluginPack.Message();
  var _formvalid = new _pluginPack.FormValidation();
  var _lib = new _formvalid.Lib();
  var _method = {};
  var _CustomMethod = {};
  var _setMethod;

  _method.target = $('input[valid="address"]');
  _method.detailCheck = false;

  this.setCustomOPT = function(_OPT){
    _CustomMethod = _OPT;
  };

  this.validation = function(){
    _setMethod = $.extend(_method, _CustomMethod);
    var _value = _setMethod.target.val();
    return ;
  };

  this.getCustomMethod = function(){
    _setMethod = $.extend(_method, _CustomMethod);
    return _setMethod;
  };

};
// 
// PluginPackage.prototype.stringRestrict =function(){
//   var _opt = {
//     target: $("input[valided]"),
//     maxlength: ""
//   };
//   this.setOption = function(_setOpt){
//     _opt = _setOpt;
//   };
//   this.getOption = function(){
//     var _val = _opt.target.val();
//     // var _val = _opt;
//     return _val;
//   };
// };









// ========test run ========

$(window).on('load',function(){
  var mainPackage = new PluginPackage();
  // var strRestri = new mainPackage.stringRestrict();
  var formvalid = new mainPackage.FormValidation();
  var validName = new formvalid.name();
  var validPhone = new formvalid.phoneValid();
  var validAdd = new formvalid.addressValid();
  var lib = new formvalid.Lib();
  var numRestric = new mainPackage.NumberOnly();
  // numRestric.restrict();
  validPhone.restrictMode();
  validName.setCustomOPT({
    langRestrict: "en"
  });
  validPhone.setCustomOPT({
    numberOnly: true,
    callback: function(){
      console.log("setCustomCallback!!");
    }
  });

  $('.btn-submit').click(function(e){
    e.preventDefault();
    var nameCheck = validName.validation();
    var phoneCheck = validPhone.validation();
    if(nameCheck && phoneCheck){
      alert("驗證成功");
    }
   });
});

