# mvc       不可继承控制器，应该是调用服务（控制器1，2有相同的部分时）

<img src="mvc_error.png" width="400"/>

<img src="mvc_right.png" width="400"/>


**操作DOM交给指令去做，不要再contrer中做，要不然性能会很低**

**不应该Controler之间相互调用，否则会有很强的耦合.控制器之间的交互可以通过$scope或数据模型上的事件进行，而Controler在内部监控这些事件**

<img src="mvc_attention.png" width="400"/>



