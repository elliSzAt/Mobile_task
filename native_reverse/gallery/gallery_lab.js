// // --- BẮT ĐẦU: jni_struct.js ---
// const jni_struct_array = [
//     "reserved0",
//     "reserved1",
//     "reserved2",
//     "reserved3",
//     "GetVersion",
//     "DefineClass",
//     "FindClass",
//     "FromReflectedMethod",
//     "FromReflectedField",
//     "ToReflectedMethod",
//     "GetSuperclass",
//     "IsAssignableFrom",
//     "ToReflectedField",
//     "Throw",
//     "ThrowNew",
//     "ExceptionOccurred",
//     "ExceptionDescribe",
//     "ExceptionClear",
//     "FatalError",
//     "PushLocalFrame",
//     "PopLocalFrame",
//     "NewGlobalRef",
//     "DeleteGlobalRef",
//     "DeleteLocalRef",
//     "IsSameObject",
//     "NewLocalRef",
//     "EnsureLocalCapacity",
//     "AllocObject",
//     "NewObject",
//     "NewObjectV",
//     "NewObjectA",
//     "GetObjectClass",
//     "IsInstanceOf",
//     "GetMethodID",
//     "CallObjectMethod",
//     "CallObjectMethodV",
//     "CallObjectMethodA",
//     "CallBooleanMethod",
//     "CallBooleanMethodV",
//     "CallBooleanMethodA",
//     "CallByteMethod",
//     "CallByteMethodV",
//     "CallByteMethodA",
//     "CallCharMethod",
//     "CallCharMethodV",
//     "CallCharMethodA",
//     "CallShortMethod",
//     "CallShortMethodV",
//     "CallShortMethodA",
//     "CallIntMethod",
//     "CallIntMethodV",
//     "CallIntMethodA",
//     "CallLongMethod",
//     "CallLongMethodV",
//     "CallLongMethodA",
//     "CallFloatMethod",
//     "CallFloatMethodV",
//     "CallFloatMethodA",
//     "CallDoubleMethod",
//     "CallDoubleMethodV",
//     "CallDoubleMethodA",
//     "CallVoidMethod",
//     "CallVoidMethodV",
//     "CallVoidMethodA",
//     "CallNonvirtualObjectMethod",
//     "CallNonvirtualObjectMethodV",
//     "CallNonvirtualObjectMethodA",
//     "CallNonvirtualBooleanMethod",
//     "CallNonvirtualBooleanMethodV",
//     "CallNonvirtualBooleanMethodA",
//     "CallNonvirtualByteMethod",
//     "CallNonvirtualByteMethodV",
//     "CallNonvirtualByteMethodA",
//     "CallNonvirtualCharMethod",
//     "CallNonvirtualCharMethodV",
//     "CallNonvirtualCharMethodA",
//     "CallNonvirtualShortMethod",
//     "CallNonvirtualShortMethodV",
//     "CallNonvirtualShortMethodA",
//     "CallNonvirtualIntMethod",
//     "CallNonvirtualIntMethodV",
//     "CallNonvirtualIntMethodA",
//     "CallNonvirtualLongMethod",
//     "CallNonvirtualLongMethodV",
//     "CallNonvirtualLongMethodA",
//     "CallNonvirtualFloatMethod",
//     "CallNonvirtualFloatMethodV",
//     "CallNonvirtualFloatMethodA",
//     "CallNonvirtualDoubleMethod",
//     "CallNonvirtualDoubleMethodV",
//     "CallNonvirtualDoubleMethodA",
//     "CallNonvirtualVoidMethod",
//     "CallNonvirtualVoidMethodV",
//     "CallNonvirtualVoidMethodA",
//     "GetFieldID",
//     "GetObjectField",
//     "GetBooleanField",
//     "GetByteField",
//     "GetCharField",
//     "GetShortField",
//     "GetIntField",
//     "GetLongField",
//     "GetFloatField",
//     "GetDoubleField",
//     "SetObjectField",
//     "SetBooleanField",
//     "SetByteField",
//     "SetCharField",
//     "SetShortField",
//     "SetIntField",
//     "SetLongField",
//     "SetFloatField",
//     "SetDoubleField",
//     "GetStaticMethodID",
//     "CallStaticObjectMethod",
//     "CallStaticObjectMethodV",
//     "CallStaticObjectMethodA",
//     "CallStaticBooleanMethod",
//     "CallStaticBooleanMethodV",
//     "CallStaticBooleanMethodA",
//     "CallStaticByteMethod",
//     "CallStaticByteMethodV",
//     "CallStaticByteMethodA",
//     "CallStaticCharMethod",
//     "CallStaticCharMethodV",
//     "CallStaticCharMethodA",
//     "CallStaticShortMethod",
//     "CallStaticShortMethodV",
//     "CallStaticShortMethodA",
//     "CallStaticIntMethod",
//     "CallStaticIntMethodV",
//     "CallStaticIntMethodA",
//     "CallStaticLongMethod",
//     "CallStaticLongMethodV",
//     "CallStaticLongMethodA",
//     "CallStaticFloatMethod",
//     "CallStaticFloatMethodV",
//     "CallStaticFloatMethodA",
//     "CallStaticDoubleMethod",
//     "CallStaticDoubleMethodV",
//     "CallStaticDoubleMethodA",
//     "CallStaticVoidMethod",
//     "CallStaticVoidMethodV",
//     "CallStaticVoidMethodA",
//     "GetStaticFieldID",
//     "GetStaticObjectField",
//     "GetStaticBooleanField",
//     "GetStaticByteField",
//     "GetStaticCharField",
//     "GetStaticShortField",
//     "GetStaticIntField",
//     "GetStaticLongField",
//     "GetStaticFloatField",
//     "GetStaticDoubleField",
//     "SetStaticObjectField",
//     "SetStaticBooleanField",
//     "SetStaticByteField",
//     "SetStaticCharField",
//     "SetStaticShortField",
//     "SetStaticIntField",
//     "SetStaticLongField",
//     "SetStaticFloatField",
//     "SetStaticDoubleField",
//     "NewString",
//     "GetStringLength",
//     "GetStringChars",
//     "ReleaseStringChars",
//     "NewStringUTF",
//     "GetStringUTFLength",
//     "GetStringUTFChars",
//     "ReleaseStringUTFChars",
//     "GetArrayLength",
//     "NewObjectArray",
//     "GetObjectArrayElement",
//     "SetObjectArrayElement",
//     "NewBooleanArray",
//     "NewByteArray",
//     "NewCharArray",
//     "NewShortArray",
//     "NewIntArray",
//     "NewLongArray",
//     "NewFloatArray",
//     "NewDoubleArray",
//     "GetBooleanArrayElements",
//     "GetByteArrayElements",
//     "GetCharArrayElements",
//     "GetShortArrayElements",
//     "GetIntArrayElements",
//     "GetLongArrayElements",
//     "GetFloatArrayElements",
//     "GetDoubleArrayElements",
//     "ReleaseBooleanArrayElements",
//     "ReleaseByteArrayElements",
//     "ReleaseCharArrayElements",
//     "ReleaseShortArrayElements",
//     "ReleaseIntArrayElements",
//     "ReleaseLongArrayElements",
//     "ReleaseFloatArrayElements",
//     "ReleaseDoubleArrayElements",
//     "GetBooleanArrayRegion",
//     "GetByteArrayRegion",
//     "GetCharArrayRegion",
//     "GetShortArrayRegion",
//     "GetIntArrayRegion",
//     "GetLongArrayRegion",
//     "GetFloatArrayRegion",
//     "GetDoubleArrayRegion",
//     "SetBooleanArrayRegion",
//     "SetByteArrayRegion",
//     "SetCharArrayRegion",
//     "SetShortArrayRegion",
//     "SetIntArrayRegion",
//     "SetLongArrayRegion",
//     "SetFloatArrayRegion",
//     "SetDoubleArrayRegion",
//     "RegisterNatives",
//     "UnregisterNatives",
//     "MonitorEnter",
//     "MonitorExit",
//     "GetJavaVM",
//     "GetStringRegion",
//     "GetStringUTFRegion",
//     "GetPrimitiveArrayCritical",
//     "ReleasePrimitiveArrayCritical",
//     "GetStringCritical",
//     "ReleaseStringCritical",
//     "NewWeakGlobalRef",
//     "DeleteWeakGlobalRef",
//     "ExceptionCheck",
//     "NewDirectByteBuffer",
//     "GetDirectBufferAddress",
//     "GetDirectBufferCapacity",
//     "GetObjectRefType"
// ];

// function getJNIFunctionAdress(jnienv_addr,func_name){
//     var offset = jni_struct_array.indexOf(func_name) * Process.pointerSize
//     return Memory.readPointer(jnienv_addr.add(offset))
// }

// // Xem hàm jni
// // function hook_all(jnienv_addr){
// //     jni_struct_array.forEach(function(func_name){
// //         if(!func_name.includes("reserved")) {
// //             var func_addr = getJNIFunctionAdress(jnienv_addr,func_name)
// //             Interceptor.attach(func_addr,{
// //                 onEnter: function(args){
// //                     console.log("[+] Entered : " + func_name)
// //                 }
// //             })
// //         }
// //     })
// // }

// // function hook_all(jnienv_addr){
// //     jni_struct_array.forEach(function(func_name){
// //         if(!func_name.includes("reserved")) {
// //             var func_addr = getJNIFunctionAdress(jnienv_addr,func_name)
// //             if (func_name === "FindClass") {
// //                 Interceptor.attach(func_addr, {
// //                     onEnter: function(args){
// //                         var className = Memory.readCString(args[1]);
// //                         console.log('env->FindClass("' + className + '")');
// //                     }
// //                 });
// //             } else {
// //                 Interceptor.attach(func_addr, {
// //                     onEnter: function(args){
// //                         // console.log("[+] Entered : " + func_name)
// //                     }
// //                 });
// //             }
// //         }
// //     })
// // }

// function hook_all(jnienv_addr){
//     // Hook FindClass
//     var findClassAddr = getJNIFunctionAdress(jnienv_addr, "FindClass");
//     Interceptor.attach(findClassAddr, {
//         onEnter: function(args){
//             var className = Memory.readCString(args[1]);
//             console.log('env->FindClass("' + className + '")');
//         }
//     });
//     // Hook SetByteArrayRegion
//     var setByteArrayRegionAddr = getJNIFunctionAdress(jnienv_addr, "SetByteArrayRegion");
//     Interceptor.attach(setByteArrayRegionAddr, {
//         onEnter: function(args){
//             var bytebuffer = Memory.readCString(args[4]);
//             console.log("Memory region content : \"" + bytebuffer + "\"");
//         }
//     });
// }
// // --- KẾT THÚC: jni_struct.js ---

// var libNameToWait = "libnative-lib.so";
// var hooked = false;
// var function_name = "Java_reverse_areizen_mygallery_MainActivity_loadImages";
// var jni_hooked = false;

// function hookJava() {
//     Java.perform(function() {
//         let MainActivity = Java.use("reverse.areizen.mygallery.MainActivity");
//         MainActivity.k.implementation = function () {
//             console.log("Bypassed root check");
//             return false;
//         };
//     });
// }

// function waitForNativeLibAndHook() {
//     var android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");
//     if (android_dlopen_ext) {
//         Interceptor.attach(android_dlopen_ext, {
//             onEnter: function(args) {
//                 var libPath = Memory.readUtf8String(args[0]);
//                 if (libPath.indexOf(libNameToWait) !== -1) {
//                     this.isTarget = true;
//                     console.log("Đã tìm thấy thư viện");
//                 }
//             },
//             onLeave: function(retval) {
//                 if (this.isTarget && !hooked) {
//                     hooked = true;
//                     setTimeout(hookJava, 100);
//                     console.log("loaded lib");
//                     hook_func(libNameToWait, function_name);
//                 }
//             }
//         });
//     } else {
//         console.log("Không tìm thấy hàm android_dlopen_ext!");
//     }
// }

// function hook_func(library_name, function_name){
//     Module.enumerateExportsSync(library_name).forEach(function(symbol){
//         if(symbol.name == function_name){
//             console.log("[...] Hooking : " + library_name + " -> " + function_name + " at " + symbol.address)
//             Interceptor.attach(symbol.address,{
//                 onEnter: function(args){
//                     if (!jni_hooked) {
//                         var jnienv_addr = Memory.readPointer(args[0])
//                         console.log("[+] Hooked successfully, JNIEnv base adress :" + jnienv_addr)
//                         hook_all(jnienv_addr)
//                         jni_hooked = true;
//                     }
//                 },
//                 onLeave: function(args){
//                     Interceptor.detachAll();
//                     console.log("[-] Detaching all interceptors");
//                 }
//             })
//         }
//     })
// }

// hookJava();
// waitForNativeLibAndHook();


// --- BẮT ĐẦU: jni_struct.js ---
const jni_struct_array = [
    "reserved0",
    "reserved1",
    "reserved2",
    "reserved3",
    "GetVersion",
    "DefineClass",
    "FindClass",
    "FromReflectedMethod",
    "FromReflectedField",
    "ToReflectedMethod",
    "GetSuperclass",
    "IsAssignableFrom",
    "ToReflectedField",
    "Throw",
    "ThrowNew",
    "ExceptionOccurred",
    "ExceptionDescribe",
    "ExceptionClear",
    "FatalError",
    "PushLocalFrame",
    "PopLocalFrame",
    "NewGlobalRef",
    "DeleteGlobalRef",
    "DeleteLocalRef",
    "IsSameObject",
    "NewLocalRef",
    "EnsureLocalCapacity",
    "AllocObject",
    "NewObject",
    "NewObjectV",
    "NewObjectA",
    "GetObjectClass",
    "IsInstanceOf",
    "GetMethodID",
    "CallObjectMethod",
    "CallObjectMethodV",
    "CallObjectMethodA",
    "CallBooleanMethod",
    "CallBooleanMethodV",
    "CallBooleanMethodA",
    "CallByteMethod",
    "CallByteMethodV",
    "CallByteMethodA",
    "CallCharMethod",
    "CallCharMethodV",
    "CallCharMethodA",
    "CallShortMethod",
    "CallShortMethodV",
    "CallShortMethodA",
    "CallIntMethod",
    "CallIntMethodV",
    "CallIntMethodA",
    "CallLongMethod",
    "CallLongMethodV",
    "CallLongMethodA",
    "CallFloatMethod",
    "CallFloatMethodV",
    "CallFloatMethodA",
    "CallDoubleMethod",
    "CallDoubleMethodV",
    "CallDoubleMethodA",
    "CallVoidMethod",
    "CallVoidMethodV",
    "CallVoidMethodA",
    "CallNonvirtualObjectMethod",
    "CallNonvirtualObjectMethodV",
    "CallNonvirtualObjectMethodA",
    "CallNonvirtualBooleanMethod",
    "CallNonvirtualBooleanMethodV",
    "CallNonvirtualBooleanMethodA",
    "CallNonvirtualByteMethod",
    "CallNonvirtualByteMethodV",
    "CallNonvirtualByteMethodA",
    "CallNonvirtualCharMethod",
    "CallNonvirtualCharMethodV",
    "CallNonvirtualCharMethodA",
    "CallNonvirtualShortMethod",
    "CallNonvirtualShortMethodV",
    "CallNonvirtualShortMethodA",
    "CallNonvirtualIntMethod",
    "CallNonvirtualIntMethodV",
    "CallNonvirtualIntMethodA",
    "CallNonvirtualLongMethod",
    "CallNonvirtualLongMethodV",
    "CallNonvirtualLongMethodA",
    "CallNonvirtualFloatMethod",
    "CallNonvirtualFloatMethodV",
    "CallNonvirtualFloatMethodA",
    "CallNonvirtualDoubleMethod",
    "CallNonvirtualDoubleMethodV",
    "CallNonvirtualDoubleMethodA",
    "CallNonvirtualVoidMethod",
    "CallNonvirtualVoidMethodV",
    "CallNonvirtualVoidMethodA",
    "GetFieldID",
    "GetObjectField",
    "GetBooleanField",
    "GetByteField",
    "GetCharField",
    "GetShortField",
    "GetIntField",
    "GetLongField",
    "GetFloatField",
    "GetDoubleField",
    "SetObjectField",
    "SetBooleanField",
    "SetByteField",
    "SetCharField",
    "SetShortField",
    "SetIntField",
    "SetLongField",
    "SetFloatField",
    "SetDoubleField",
    "GetStaticMethodID",
    "CallStaticObjectMethod",
    "CallStaticObjectMethodV",
    "CallStaticObjectMethodA",
    "CallStaticBooleanMethod",
    "CallStaticBooleanMethodV",
    "CallStaticBooleanMethodA",
    "CallStaticByteMethod",
    "CallStaticByteMethodV",
    "CallStaticByteMethodA",
    "CallStaticCharMethod",
    "CallStaticCharMethodV",
    "CallStaticCharMethodA",
    "CallStaticShortMethod",
    "CallStaticShortMethodV",
    "CallStaticShortMethodA",
    "CallStaticIntMethod",
    "CallStaticIntMethodV",
    "CallStaticIntMethodA",
    "CallStaticLongMethod",
    "CallStaticLongMethodV",
    "CallStaticLongMethodA",
    "CallStaticFloatMethod",
    "CallStaticFloatMethodV",
    "CallStaticFloatMethodA",
    "CallStaticDoubleMethod",
    "CallStaticDoubleMethodV",
    "CallStaticDoubleMethodA",
    "CallStaticVoidMethod",
    "CallStaticVoidMethodV",
    "CallStaticVoidMethodA",
    "GetStaticFieldID",
    "GetStaticObjectField",
    "GetStaticBooleanField",
    "GetStaticByteField",
    "GetStaticCharField",
    "GetStaticShortField",
    "GetStaticIntField",
    "GetStaticLongField",
    "GetStaticFloatField",
    "GetStaticDoubleField",
    "SetStaticObjectField",
    "SetStaticBooleanField",
    "SetStaticByteField",
    "SetStaticCharField",
    "SetStaticShortField",
    "SetStaticIntField",
    "SetStaticLongField",
    "SetStaticFloatField",
    "SetStaticDoubleField",
    "NewString",
    "GetStringLength",
    "GetStringChars",
    "ReleaseStringChars",
    "NewStringUTF",
    "GetStringUTFLength",
    "GetStringUTFChars",
    "ReleaseStringUTFChars",
    "GetArrayLength",
    "NewObjectArray",
    "GetObjectArrayElement",
    "SetObjectArrayElement",
    "NewBooleanArray",
    "NewByteArray",
    "NewCharArray",
    "NewShortArray",
    "NewIntArray",
    "NewLongArray",
    "NewFloatArray",
    "NewDoubleArray",
    "GetBooleanArrayElements",
    "GetByteArrayElements",
    "GetCharArrayElements",
    "GetShortArrayElements",
    "GetIntArrayElements",
    "GetLongArrayElements",
    "GetFloatArrayElements",
    "GetDoubleArrayElements",
    "ReleaseBooleanArrayElements",
    "ReleaseByteArrayElements",
    "ReleaseCharArrayElements",
    "ReleaseShortArrayElements",
    "ReleaseIntArrayElements",
    "ReleaseLongArrayElements",
    "ReleaseFloatArrayElements",
    "ReleaseDoubleArrayElements",
    "GetBooleanArrayRegion",
    "GetByteArrayRegion",
    "GetCharArrayRegion",
    "GetShortArrayRegion",
    "GetIntArrayRegion",
    "GetLongArrayRegion",
    "GetFloatArrayRegion",
    "GetDoubleArrayRegion",
    "SetBooleanArrayRegion",
    "SetByteArrayRegion",
    "SetCharArrayRegion",
    "SetShortArrayRegion",
    "SetIntArrayRegion",
    "SetLongArrayRegion",
    "SetFloatArrayRegion",
    "SetDoubleArrayRegion",
    "RegisterNatives",
    "UnregisterNatives",
    "MonitorEnter",
    "MonitorExit",
    "GetJavaVM",
    "GetStringRegion",
    "GetStringUTFRegion",
    "GetPrimitiveArrayCritical",
    "ReleasePrimitiveArrayCritical",
    "GetStringCritical",
    "ReleaseStringCritical",
    "NewWeakGlobalRef",
    "DeleteWeakGlobalRef",
    "ExceptionCheck",
    "NewDirectByteBuffer",
    "GetDirectBufferAddress",
    "GetDirectBufferCapacity",
    "GetObjectRefType"
];

function getJNIFunctionAdress(jnienv_addr,func_name){
    var offset = jni_struct_array.indexOf(func_name) * Process.pointerSize
    return Memory.readPointer(jnienv_addr.add(offset))
}

// Xem hàm jni
// function hook_all(jnienv_addr){
//     jni_struct_array.forEach(function(func_name){
//         if(!func_name.includes("reserved")) {
//             var func_addr = getJNIFunctionAdress(jnienv_addr,func_name)
//             Interceptor.attach(func_addr,{
//                 onEnter: function(args){
//                     console.log("[+] Entered : " + func_name)
//                 }
//             })
//         }
//     })
// }

// function hook_all(jnienv_addr){
//     jni_struct_array.forEach(function(func_name){
//         if(!func_name.includes("reserved")) {
//             var func_addr = getJNIFunctionAdress(jnienv_addr,func_name)
//             if (func_name === "FindClass") {
//                 Interceptor.attach(func_addr, {
//                     onEnter: function(args){
//                         var className = Memory.readCString(args[1]);
//                         console.log('env->FindClass("' + className + '")');
//                     }
//                 });
//             } else {
//                 Interceptor.attach(func_addr, {
//                     onEnter: function(args){
//                         // console.log("[+] Entered : " + func_name)
//                     }
//                 });
//             }
//         }
//     })
// }

function hook_all(jnienv_addr){
    // Hook FindClass
    var findClassAddr = getJNIFunctionAdress(jnienv_addr, "FindClass");
    Interceptor.attach(findClassAddr, {
        onEnter: function(args){
            var className = Memory.readCString(args[1]);
            console.log('env->FindClass("' + className + '")');
        }
    });
    // Hook SetByteArrayRegion
    var setByteArrayRegionAddr = getJNIFunctionAdress(jnienv_addr, "SetByteArrayRegion");
    Interceptor.attach(setByteArrayRegionAddr, {
        onEnter: function(args){
            var bytebuffer = Memory.readCString(args[4]);
            console.log("Memory region content : \"" + bytebuffer + "\"");
        }
    });
}
// --- KẾT THÚC: jni_struct.js ---

var libNameToWait = "libnative-lib.so";
var hooked = false;
var function_name = "Java_reverse_areizen_mygallery_MainActivity_loadImages";
var jni_hooked = false;

function hookJava() {
    Java.perform(function() {
        let MainActivity = Java.use("reverse.areizen.mygallery.MainActivity");
        MainActivity.k.implementation = function () {
            console.log("Bypassed root check");
            return false;
        };
    });
}

function waitForNativeLibAndHook() {
    var android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");
    if (android_dlopen_ext) {
        Interceptor.attach(android_dlopen_ext, {
            onEnter: function(args) {
                var libPath = Memory.readUtf8String(args[0]);
                if (libPath.indexOf(libNameToWait) !== -1) {
                    this.isTarget = true;
                    console.log("Đã tìm thấy thư viện");
                }
            },
            onLeave: function(retval) {
                if (this.isTarget && !hooked) {
                    hooked = true;
                    setTimeout(hookJava, 100);
                    console.log("loaded lib");
                    hook_func(libNameToWait, function_name);
                }
            }
        });
    } else {
        console.log("Không tìm thấy hàm android_dlopen_ext!");
    }
}

function hook_func(library_name, function_name){
    Module.enumerateExportsSync(library_name).forEach(function(symbol){
        if(symbol.name == function_name){
            console.log("[...] Hooking : " + library_name + " -> " + function_name + " at " + symbol.address)
            Interceptor.attach(symbol.address,{
                onEnter: function(args){
                    if (!jni_hooked) {
                        var jnienv_addr = Memory.readPointer(args[0])
                        console.log("[+] Hooked successfully, JNIEnv base adress :" + jnienv_addr)
                        hook_all(jnienv_addr)
                        jni_hooked = true;
                    }
                },
                onLeave: function(args){
                    Interceptor.detachAll();
                    console.log("[-] Detaching all interceptors");
                }
            })
        }
    })
}

hookJava();
waitForNativeLibAndHook();