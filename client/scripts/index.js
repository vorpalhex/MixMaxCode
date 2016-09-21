//setup code mirror with some reasonable defaults
var cm = CodeMirror.fromTextArea($('#codeEditor').get(0), {
  lineNumbers: true,
  theme: 'dracula',
  tabSize: 2,
  mode: 'javascript',
  keyMap: 'sublime'
});

//handle grammar updates
$('#grammarSelect').change(function(e){
  cm.setOption('mode', $(e.target).val());
});

//same for keybinds
$('#keybindSelect').change(function(e){
  cm.setOption('keyMap', $(e.target).val());
});

//if cancel is called, pass to minmax
$('#cancelBtn').click(function(){
  Mixmax.cancel();
});

//build our response and send it to Mixmax
$('#insertBtn').click(function(){
  let res = {
    code: cm.getDoc().getValue(),
    grammar: cm.getOption('mode')
  };
  Mixmax.done(res);
});
