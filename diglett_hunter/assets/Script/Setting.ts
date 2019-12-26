const { ccclass, property } = cc._decorator

@ccclass
export default class Setting extends cc.Component {
  @property({ tooltip: '地鼠/凯少的生成速度（单位：个/秒）' })
  apperanceSpeed = 3

  @property({ tooltip: '同时存在地鼠/凯少最大数量' })
  apperanceCount = 3 //同时存在地鼠/凯少最大数量

  @property({ tooltip: '连击额外加分数' })
  comboExtraScore = 1 //连击额外加分数

  @property({ tooltip: '基本有效击打分数' })
  basicSlashScore = 5 //基本有效击打分数

  @property({ tooltip: '游戏的限时' })
  gameMaxAviailableSeconds = 3 * 60

  @property({ tooltip: '凯少的出现概率' })
  probablityKai = 0.2

  @property({ tooltip: '地鼠2号的出现概率' })
  probablityDiglett2 = 0.1

  // TOLEARN：是不是可以在这里载入全局配置？
  // start() {
  //   this.label.string = this.text
  // }
}
