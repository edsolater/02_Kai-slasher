const { ccclass, property } = cc._decorator

@ccclass
export default class Setting extends cc.Component {
  @property
  apperanceSpeed = 3 /* 3个每秒 */ //地鼠/凯少的生成速度

  @property
  apperanceCount = 3 //同时存在地鼠/凯少最大数量

  @property
  probablity = {
    //特殊地鼠/凯少的出现概率
    kai: 0.2 /* 有20%的可能性出凯少 */,
    diglett2: 0.1 /* 有10%的可能性出地鼠2号 */,
  }

  @property
  comboExtraScore = 1 //连击额外加分数

  @property
  basicSlashScore = 5 //基本有效击打分数

  @property
  gameMaxAviailableSeconds = 3 * 60 /* 暂定为3分钟 */ //单局游戏的最大时间

  // TOLEARN：是不是可以在这里载入全局配置？
  // start() {
  //   this.label.string = this.text
  // }
}
