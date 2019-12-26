const { ccclass, property } = cc._decorator

/**
 * 用于记录单据游戏产生的数据
 */
@ccclass
export default class GameRecord extends cc.Component {
  @property({ tooltip: '玩家已坚持的秒数' })
  passedSeconds = 0

  @property({ tooltip: '游戏中获得的分数' })
  totalScore = 0

  @property({ tooltip: '(单局游戏中）当前连击层级' })
  currentCombo = 0

  @property({ tooltip: '单局游戏中）玩家曾达到的最高连击层级' })
  highestCombo = 0

  @property({ tooltip: '用于记录游戏中的有效连击，每次中断连击时推入' })
  comboList = 0

  @property({ tooltip: '玩家击中的凯少数' })
  beatAgainstKai = 0

  @property({ tooltip: '玩家击中的普通地鼠数' })
  beatAgainstDiglett1 = 0

  @property({ tooltip: '玩家击中的地鼠2号数' })
  beatAgainstDiglett2 = 0

  // start() {
  //   this.label.string = this.text
  // }
}
