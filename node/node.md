# 基础知识
1. 同步/异步  阻塞/非阻塞(是针对IO状态而言的, 关注程序在等待IO调用返回这段时间的状态)

    * 同步: 指的是进程/线程 发起调用后, 一直等待调用返回后才继续执行下一步操作。(这并不代表CPU在这一段时间内也会一直等待, 操作系统多半会切换到另一个进程/线程上去, 等到调用返回后再切换回原来的进程/线程。)
    
    * 异步: 发起一个进程调用后, 进程/线程继续向下执行(下一个), 当调用返回后, 通过某种手段来通知调用者。
    
    * 阻塞IO: 通常可以分为两个阶段, 准备数据和返回结果, 阻塞型IO在进程发出一个系统调用请求之后, 进程就一直等待上述两个阶段完成, 等待拿到返回结果之后再重新运行。
    
    * 非阻塞IO: 和上面的过程相似, 不同之处是当进程发起一个调用后, 如果数据还没有就绪, 就会马上返回一个结果告诉进程现在还没有就绪, 和阻塞 IO 的区别是用户进程会不断查询内核状态。这个过程依旧是同步的。
    
    * 异步IO: 异步IO的概念读者应该很熟悉了, 和前面的模型相比, 当进程发出调用后, 内核会立刻返回结果, 进程会继续做其他的事情, 直到操作系统返回数据, 给用户进程发送一个信号。注意, 异步IO并没有涉及任何关于回调函数的概念, 此外, 这里的异步IO只存在于Linux系统下。

2. 回调: 一个回调是指通过函数参数的参数传递到其他代码的, 某段可执行代码的引用。说得通俗一点, 就是将一个函数作为参数传递给另一个函数, 并且作为参数的函数可以被执行, 其本质上是一个高阶函数。在数学和计算机科学中, 高阶函数是至少满足下列一个条件的函数:
