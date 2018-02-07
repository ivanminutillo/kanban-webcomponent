import { Component, Prop } from '@stencil/core'
import {bin} from '../interfaces'

@Component({
  tag: 'oce-kanban',
  styleUrl: 'style.scss',
  shadow: true
})
export class Kanban {

  @Prop() bins: Array<bin>
  @Prop() due: string

  render() {
    return (
    <div class="board_container">
      <div class="board">
        {this.bins.map(bin => (
          <oce-bin
            cards={bin.cards}
            outputs={bin.outputs}
            due={bin.due}
            title={bin.title}
            note={bin.note}
          />
        ))}
      </div>
    </div>
    )
  }
}
