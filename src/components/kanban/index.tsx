import { Component, Prop } from '@stencil/core'
// import {bin} from '../interfaces'

@Component({
  tag: 'oce-kanban',
  styleUrl: 'style.css',
  shadow: true
})
export class Kanban {

  @Prop() bins: string
  @Prop() due: string

  render() {
    let bins = JSON.parse(this.bins)
    return (
    <div class="board_container">
      <div class="board">
        {bins.map(bin => (
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
