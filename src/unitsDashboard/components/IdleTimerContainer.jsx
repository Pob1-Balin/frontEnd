import React from 'react';
import { Component } from 'react'
import { IdleTimerContext, IdleTimerProvider } from 'react-idle-timer'

export class Child extends Component {
  // Set the context type to the IdleTimerContext
  // The IIdleTimer interface will be available on this.context
  static contextType = IdleTimerContext

  render () {
    return (
      <h1>{this.context.getTotalActiveTime()} let me see the</h1>
    )
  }
}

export default class IdleTimerContainer extends Component {
  onPrompt () {
    // Fire a Modal Prompt
  }

  onIdle () {
    // Close Modal Prompt
    // Do some idle action like log out your user
  }

  onActive (event) {
    // Close Modal Prompt
    // Do some active action
  }

  onAction (event) {
    // Do something when a user triggers a watched event
  }

  render () {
    return (
      <IdleTimerProvider
        timeout={3 * 1000}
        onPrompt={this.onPrompt}
        onIdle={this.onIdle}
        onActive={this.onActive}
        onAction={this.onAction}
      >
        <Child />
      </IdleTimerProvider>
    )
  }
}