function HTMLLexicalParser() {
  //状态函数们……
  let EOF = 10;
  let token;
  let StartTagToken;

  // data 为初始状态
  var data = function (c) {
    if (c == "&") {
      return characterReferenceInData;
    }
    if (c == "<") {
      return tagOpenState;
    } else if (c == "\0") {
      error();
      emitToken(c);
      return data;
    } else if (c == EOF) {
      emitToken(EOF);
      return data;
    } else {
      emitToken(c);
      return data;
    }
  };

  // tagOpenState 是接受了一个“ < ” 字符，来判断标签类型的状态。
  var tagOpenState = function tagOpenState(c) {
    if (c == "/") {
      return endTagOpenState;
    }
    if (c.match(/[A-Z]/)) {
      token = new StartTagToken();
      token.name = c.toLowerCase();
      return tagNameState;
    }
    if (c.match(/[a-z]/)) {
      token = new StartTagToken();
      token.name = c;
      return tagNameState;
    }
    if (c == "?") {
      return bogusCommentState;
    } else {
      error();
      return dataState;
    }
  };

  // 这里的状态机，每一个状态是一个函数，通过“if else”来区分下一个字符做状态迁移。这里所谓的状态迁移，就是当前状态函数返回下一个状态函数。
  var error = function (c) {
    if (c) {
      console.log();
    } else {
      console.log();
    }
  };

  var endTagOpenState = function endTagOpenState(c) {
    if (c) {
      console.log();
    } else {
      console.log();
    }
  };

  var characterReferenceInData = function characterReferenceInData(c) {
    if (c) {
      console.log();
    } else {
      console.log();
    }
  };

  var tagNameState = function tagNameState(c) {
    if (c) {
      console.log();
    } else {
      console.log();
    }
  };

  var bogusCommentState = function bogusCommentState(c) {
    if (c) {
      console.log();
    } else {
      console.log();
    }
  };

  var dataState = function dataState(c) {
    if (c) {
      console.log();
    } else {
      console.log();
    }
  };

  // 状态函数通过代码中的 emitToken 函数来输出解析好的 token（词），我们只需要覆盖 emitToken，即可指定对解析结果的处理方式。
  var emitToken = function emitToken(c) {
    console.log(c);
  };
  //……

  // 关键一句是“ state = state(char) ”，不论我们用何种方式来读取字符串流，我们都可以通过 state 来处理输入的字符流，这里用循环是一个示例，真实场景中，可能是来自 TCP 的输出流。
  var state = data;
  this.receiveInput = function (char) {
    state = state(char);
  };
}
HTMLLexicalParser();
