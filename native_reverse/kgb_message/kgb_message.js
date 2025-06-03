setImmediate(function () {
    Java.perform(function () {
        var System = Java.use("java.lang.System");
        System.getProperty.overload('java.lang.String').implementation = function (key) {
            if (key === "user.home") {
                console.log("[+] getProperty user.home -> Russia (bypassed)");
                return "Russia";
            }
            return this.getProperty(key);
        };

        System.getenv.overload('java.lang.String').implementation = function (name) {
            if (name === "USER") {
                var b64 = "RkxBR3s1N0VSTDFOR180UkNIM1J9Cg==";
                var decoded = Java.use("android.util.Base64").decode(b64, 0);
                var decodedStr = Java.use("java.lang.String").$new(decoded);
                console.log("[+] getenv USER -> " + decodedStr + " (decoded)");
                return b64;
            }
            return this.getenv(name);
        };

        console.log("[*] Integrity check bypass installed.");

        var LoginActivity = Java.use("com.tlamb96.kgbmessenger.LoginActivity");
        var username_res = "codenameduchess";
        var password_res = "guest";
        console.log("[*] Resource username: " + username_res);
        console.log("[*] Resource password (plain): " + password_res);

        LoginActivity.i.implementation = function () {
            var n = this.n.value;
            var o = this.o.value;

            var cArr = ['(', 'W', 'D', ')', 'T', 'P', ':', '#', '?', 'T'];
            cArr[0] = String.fromCharCode(cArr[0].charCodeAt(0) ^ n.charCodeAt(1));
            cArr[1] = String.fromCharCode(cArr[1].charCodeAt(0) ^ o.charCodeAt(0));
            cArr[2] = String.fromCharCode(cArr[2].charCodeAt(0) ^ o.charCodeAt(4));
            cArr[3] = String.fromCharCode(cArr[3].charCodeAt(0) ^ n.charCodeAt(4));
            cArr[4] = String.fromCharCode(cArr[4].charCodeAt(0) ^ n.charCodeAt(7));
            cArr[5] = String.fromCharCode(cArr[5].charCodeAt(0) ^ n.charCodeAt(0));
            cArr[6] = String.fromCharCode(cArr[6].charCodeAt(0) ^ o.charCodeAt(2));
            cArr[7] = String.fromCharCode(cArr[7].charCodeAt(0) ^ o.charCodeAt(3));
            cArr[8] = String.fromCharCode(cArr[8].charCodeAt(0) ^ n.charCodeAt(6));
            cArr[9] = String.fromCharCode(cArr[9].charCodeAt(0) ^ n.charCodeAt(8));

            var flag = "FLAG{" + cArr.join('') + "}";
            console.log("[*] FLAG (from LoginActivity.i): " + flag);

            return this.i();
        };

        LoginActivity.onLogin.implementation = function (view) {

            this.onLogin(view);

            console.log("[*] Input username: " + this.n.value);
            console.log("[*] Input password: " + this.o.value);
        };

        function decodeA(str) {
            var p = str.split('');
            var half = Math.floor(p.length / 2);

            for (var i = 0; i < half; i++) {
                p[i] = String.fromCharCode(p[i].charCodeAt(0) ^ 0x32);
                p[half + 1 + i] = String.fromCharCode(p[half + 1 + i].charCodeAt(0) ^ 0x41);
            }

            p.reverse();

            var result = p.join('');
            console.log("[*] decodeA result: " + result);
            return result;
        }

        function decodeB(str) {
            var r = str.split('').reverse();
            var printable = [];
            for (var i = 32; i <= 126; i++) printable.push(String.fromCharCode(i));

            var result = "";
            for (var i = 0; i < r.length; i++) {
                if (i % 8 === 0) {
                    result += "_";
                    continue;
                }
                var found = false;
                for (var j = 0; j < printable.length; j++) {
                    var ch = printable[j];
                    var x = String.fromCharCode((ch.charCodeAt(0) >> (i % 8)) ^ ch.charCodeAt(0));
                    if (x === r[i]) {
                        result += ch;
                        found = true;
                        break;
                    }
                }
                if (!found) result += "?";
            }
            console.log("[*] decodeB result: " + result);
            console.log("[*] Guest: May I *PLEASE* have the password?");
            var flag = "FLAG{p455w0rd_P134SE}"
            console.log("[*] FLAG MESSAGE -> " + flag);
            return result;
        }

        var strA = "V@]EAASB\u0012WZF\u0012e,a$7(&am2(3.\u0003";
        decodeA(strA);

        var strB = "\u0000dslp}oQ\u0000 dks$|M\u0000h +AYQg\u0000P*!M$gQ\u0000";
        decodeB(strB);

    });
});
