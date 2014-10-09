GC(垃圾回收 Gabage Collection)
===
[JavaScript 应用程序中内存泄漏](http://www.ibm.com/developerworks/cn/web/wa-jsmemory/index.html)

Javascript引擎基础GC方案是（simple GC）：

	mark and sweep（标记清除）

即：

（1）遍历所有可访问的对象。

（2）回收已不可访问的对象。