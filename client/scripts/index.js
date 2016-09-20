var cm = CodeMirror.fromTextArea($('#codeEditor').get(0), {
  lineNumbers: true,
  theme: 'dracula',
  tabSize: 2,
  mode: 'javascript',
  keyMap: 'sublime'
});

$('#grammarSelect').change(function(e){
  cm.setOption('mode', $(e.target).val());
});

$('#keybindSelect').change(function(e){
  cm.setOption('keyMap', $(e.target).val());
});

$('#cancelBtn').click(function(){
  Mixmax.cancel();
});

$('#insertBtn').click(function(){
  let res = {
    code: cm.getDoc().getValue(),
    grammar: cm.getOption('mode')
  };
  Mixmax.done(res);
});
