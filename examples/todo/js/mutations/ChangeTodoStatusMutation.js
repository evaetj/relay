/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

export default class ChangeTodoStatusMutation extends Relay.Mutation {
  static fragments = {
    todo: () => Relay.QL`
      fragment on Todo {
        id,
      }
    `,
    // TODO: Mark completedCount optional
    viewer: () => Relay.QL`
      fragment on User {
        id,
        todos {
          completedCount,
        },
      }
    `,
  };
  getMutation() {
    return Relay.QL`mutation{changeTodoStatus}`;
  }
  getFatQuery() {
    return Relay.QL`
      fragment on ChangeTodoStatusPayload {
        todo {
          complete,
        },
        viewer {
          todos {
            completedCount,
          },
        },
      }
    `;
  }
  getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        todo: this.props.todo.id,
        viewer: this.props.viewer.id,
      },
    }];
  }
  getVariables() {
    return {
      complete: this.props.complete,
      id: this.props.todo.id,
    };
  }
  getOptimisticResponse() {
    var viewerPayload;
    if (this.props.viewer.todos) {
      viewerPayload = {id: this.props.viewer.id, todos: {}};
      if (this.props.viewer.todos.completedCount != null) {
        viewerPayload.todos.completedCount = this.props.complete
          ? this.props.viewer.todos.completedCount + 1
          : this.props.viewer.todos.completedCount - 1;
      }
    }
    return {
      todo: {
        complete: this.props.complete,
        id: this.props.todo.id,
      },
      viewer: viewerPayload,
    };
  }
}
