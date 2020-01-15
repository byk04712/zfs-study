<!--
 * @Author: 秦真
 * @Date: 2020-01-11 11:17:05
 * @LastEditTime: 2020-01-11 11:34:28
 * @LastEditors: 秦真
 * @Description: 
 * @FilePath: /zfs_study/设计模式/设计模式.md
 -->
# Javascript设计模式

## 什么是设计模式

#### 1. 什么是设计模式

- 设计模式是**前人总结出的，解决开发中某类问题的方法**；

- 我们在过去的代码编写中已经接触过很多的设计模式了，只不过当时咱们不知道这就是一种设计模式而已；
- 设计模式之间并不是互相独立的，往往一个功能需要多个设计模式的配合实现；
- 每个设计模式所解决的问题肯定是不同的，根据这些模式的功能我们可以将他们分成很多几大类：
	- 创建型设计模式（Creational），主要用于创建对象。
      - 单例模式(Singleton) 
      - 抽象工厂模式(Abstract Factory)
      - 建造者模式(Builder)
      - 工厂方法模式(Factory Method)
      - 原型模式(Prototype)

	- 结构型设计模式（Structural），主要用于处理类或对象的组合。
      - 适配器模式(Adapter)
      - 桥接模式(Bridge)
      - 组合模式(Composite)
      - 装饰模式(Decorator)
      - 外观模式(Facade)
      - 享元模式(Flyweight)
      - 代理模式(Proxy)

	- 行为型设计模式（Behavioral），主要用于描述对类或对象怎样交互和怎样分配职责。
  当然在JavaScript里面还可以有其他的一些特殊的设计模式。

      - 职责链模式(Chain of Responsibility)
      - 命令模式(Command)
      - 解释器模式(Interpreter)
      - 迭代器模式(Iterator)
      - 中介者模式(Mediator)
      - 备忘录模式(Memento)
      - 观察者模式(Observer)
      - 状态模式(State)
      - 策略模式(Strategy)
      - 模板方法模式(Template Method)
      - 访问者模式(Visitor)

#### 2. 学前准备

- 原生JavaScript的基础
- 面向对象相关的基础
- ES6基础
