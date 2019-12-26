const { ccclass, property } = cc._decorator

/**
 * 用于记录单据游戏产生的数据
 */
@ccclass
export default class GameRecord extends cc.Component {
  @property
  passedSeconds = 0 //玩家已坚持的秒数

  @property
  totalScore = 0 //游戏中获得的分数

  @property
  currentCombo = 0 //（单局游戏中）当前连击层级

  @property
  highestCombo = 0 //（单局游戏中）玩家曾达到的最高连击层级

  @property
  comboList = 5 //用于记录游戏中的有效连击，每次中断连击时推入

  @property
  counter = {
    kai: 0,
    diglett1: 0,
    diglett2: 0,
  } //玩家击中的地鼠/凯少个数

  // start() {
  //   this.label.string = this.text
  // }
}
