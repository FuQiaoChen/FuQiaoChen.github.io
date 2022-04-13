import{_ as s,r,o as d,c as h,a as e,e as o,F as n,b as t,d as a}from"./app.7c1b7857.js";const c={},l=e("h1",{id:"\u56FE\u89E3git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u56FE\u89E3git","aria-hidden":"true"},"#"),t(" \u56FE\u89E3Git")],-1),g=t("\u5982\u679C\u56FE\u7247\u4E0D\u80FD\u663E\u793A\uFF0C\u8BD5\u8BD5"),_={href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html?no-svg",target:"_blank",rel:"noopener noreferrer"},m=t("\u975ESVG\u7248"),u=t("\u6B64\u9875\u56FE\u89E3git\u4E2D\u7684\u6700\u5E38\u7528\u547D\u4EE4\u3002\u5982\u679C\u4F60\u7A0D\u5FAE\u7406\u89E3git\u7684\u5DE5\u4F5C\u539F\u7406\uFF0C\u8FD9\u7BC7\u6587\u7AE0\u80FD\u591F\u8BA9\u4F60\u7406\u89E3\u7684\u66F4\u900F\u5F7B\u3002 \u5982\u679C\u4F60\u60F3\u77E5\u9053\u8FD9\u4E2A\u7AD9\u70B9\u600E\u6837\u4EA7\u751F\uFF0C\u8BF7\u524D\u5F80"),p={href:"http://github.com/MarkLodato/visual-git-guide",target:"_blank",rel:"noopener noreferrer"},b=t("GitHub repository"),k=t("\u3002"),f=e("h2",{id:"\u6B63\u6587",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6B63\u6587","aria-hidden":"true"},"#"),t(" \u6B63\u6587")],-1),v={href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html#basic-usage",target:"_blank",rel:"noopener noreferrer"},x=t("\u57FA\u672C\u7528\u6CD5"),D={href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html#conventions",target:"_blank",rel:"noopener noreferrer"},E=t("\u7EA6\u5B9A"),H=t("\u547D\u4EE4\u8BE6\u89E3 "),z={href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html#diff",target:"_blank",rel:"noopener noreferrer"},A=t("Diff"),y={href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html#commit",target:"_blank",rel:"noopener noreferrer"},w=t("Commit"),C={href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html#checkout",target:"_blank",rel:"noopener noreferrer"},G=t("Checkout"),V={href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html#detached",target:"_blank",rel:"noopener noreferrer"},N=t("Detached HEAD(\u533F\u540D\u5206\u652F\u63D0\u4EA4)"),R={href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html#reset",target:"_blank",rel:"noopener noreferrer"},S=t("Reset"),B={href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html#merge",target:"_blank",rel:"noopener noreferrer"},I=t("Merge"),L={href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html#cherry-pick",target:"_blank",rel:"noopener noreferrer"},M=t("Cherry Pick"),q={href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html#rebase",target:"_blank",rel:"noopener noreferrer"},F=t("Rebase"),P={href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html#technical-notes",target:"_blank",rel:"noopener noreferrer"},T=t("\u6280\u672F\u8BF4\u660E"),j=a('<h2 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u7528\u6CD5</h2><p><img src="http://marklodato.github.io/visual-git-guide/basic-usage.svg" alt="img"></p><p>\u4E0A\u9762\u7684\u56DB\u6761\u547D\u4EE4\u5728\u5DE5\u4F5C\u76EE\u5F55\u3001\u6682\u5B58\u76EE\u5F55(\u4E5F\u53EB\u505A\u7D22\u5F15)\u548C\u4ED3\u5E93\u4E4B\u95F4\u590D\u5236\u6587\u4EF6\u3002</p><ul><li><code>git add *files*</code> \u628A\u5F53\u524D\u6587\u4EF6\u653E\u5165\u6682\u5B58\u533A\u57DF\u3002</li><li><code>git commit</code> \u7ED9\u6682\u5B58\u533A\u57DF\u751F\u6210\u5FEB\u7167\u5E76\u63D0\u4EA4\u3002</li><li><code>git reset -- *files*</code> \u7528\u6765\u64A4\u9500\u6700\u540E\u4E00\u6B21<code>git add *files*</code>\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u7528<code>git reset</code> \u64A4\u9500\u6240\u6709\u6682\u5B58\u533A\u57DF\u6587\u4EF6\u3002</li><li><code>git checkout -- *files*</code> \u628A\u6587\u4EF6\u4ECE\u6682\u5B58\u533A\u57DF\u590D\u5236\u5230\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u7528\u6765\u4E22\u5F03\u672C\u5730\u4FEE\u6539\u3002</li></ul><p>\u4F60\u53EF\u4EE5\u7528 <code>git reset -p</code>, <code>git checkout -p</code>, or <code>git add -p</code>\u8FDB\u5165\u4EA4\u4E92\u6A21\u5F0F\u3002</p><p>\u4E5F\u53EF\u4EE5\u8DF3\u8FC7\u6682\u5B58\u533A\u57DF\u76F4\u63A5\u4ECE\u4ED3\u5E93\u53D6\u51FA\u6587\u4EF6\u6216\u8005\u76F4\u63A5\u63D0\u4EA4\u4EE3\u7801\u3002</p><p><img src="http://marklodato.github.io/visual-git-guide/basic-usage-2.svg" alt="img"></p><ul><li><code>git commit -a </code>\u76F8\u5F53\u4E8E\u8FD0\u884C <code>git add</code> \u628A\u6240\u6709\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u52A0\u5165\u6682\u5B58\u533A\u57DF\u518D\u8FD0\u884C\u3002<code>git commit</code>.</li><li><code>git commit *files*</code> \u8FDB\u884C\u4E00\u6B21\u5305\u542B\u6700\u540E\u4E00\u6B21\u63D0\u4EA4\u52A0\u4E0A\u5DE5\u4F5C\u76EE\u5F55\u4E2D\u6587\u4EF6\u5FEB\u7167\u7684\u63D0\u4EA4\u3002\u5E76\u4E14\u6587\u4EF6\u88AB\u6DFB\u52A0\u5230\u6682\u5B58\u533A\u57DF\u3002</li><li><code>git checkout HEAD -- *files*</code> \u56DE\u6EDA\u5230\u590D\u5236\u6700\u540E\u4E00\u6B21\u63D0\u4EA4\u3002</li></ul><h2 id="\u7EA6\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u7EA6\u5B9A" aria-hidden="true">#</a> \u7EA6\u5B9A</h2><p>\u540E\u6587\u4E2D\u4EE5\u4E0B\u9762\u7684\u5F62\u5F0F\u4F7F\u7528\u56FE\u7247\u3002</p><p><img src="http://marklodato.github.io/visual-git-guide/conventions.svg" alt="img"></p><p>\u7EFF\u8272\u76845\u4F4D\u5B57\u7B26\u8868\u793A\u63D0\u4EA4\u7684ID\uFF0C\u5206\u522B\u6307\u5411\u7236\u8282\u70B9\u3002\u5206\u652F\u7528\u6A58\u8272\u663E\u793A\uFF0C\u5206\u522B\u6307\u5411\u7279\u5B9A\u7684\u63D0\u4EA4\u3002\u5F53\u524D\u5206\u652F\u7531\u9644\u5728\u5176\u4E0A\u7684<em>HEAD</em>\u6807\u8BC6\u3002 \u8FD9\u5F20\u56FE\u7247\u91CC\u663E\u793A\u6700\u540E5\u6B21\u63D0\u4EA4\uFF0C<em>ed489</em>\u662F\u6700\u65B0\u63D0\u4EA4\u3002 <em>main</em>\u5206\u652F\u6307\u5411\u6B64\u6B21\u63D0\u4EA4\uFF0C\u53E6\u4E00\u4E2A<em>stable</em>\u5206\u652F\u6307\u5411\u7956\u7236\u63D0\u4EA4\u8282\u70B9\u3002</p><h2 id="\u547D\u4EE4\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u8BE6\u89E3" aria-hidden="true">#</a> \u547D\u4EE4\u8BE6\u89E3</h2><h3 id="diff" tabindex="-1"><a class="header-anchor" href="#diff" aria-hidden="true">#</a> Diff</h3><p>\u6709\u8BB8\u591A\u79CD\u65B9\u6CD5\u67E5\u770B\u4E24\u6B21\u63D0\u4EA4\u4E4B\u95F4\u7684\u53D8\u52A8\u3002\u4E0B\u9762\u662F\u4E00\u4E9B\u793A\u4F8B\u3002</p><p><img src="http://marklodato.github.io/visual-git-guide/diff.svg" alt="img"></p><h3 id="commit" tabindex="-1"><a class="header-anchor" href="#commit" aria-hidden="true">#</a> Commit</h3><p>\u63D0\u4EA4\u65F6\uFF0Cgit\u7528\u6682\u5B58\u533A\u57DF\u7684\u6587\u4EF6\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u63D0\u4EA4\uFF0C\u5E76\u628A\u6B64\u65F6\u7684\u8282\u70B9\u8BBE\u4E3A\u7236\u8282\u70B9\u3002\u7136\u540E\u628A\u5F53\u524D\u5206\u652F\u6307\u5411\u65B0\u7684\u63D0\u4EA4\u8282\u70B9\u3002\u4E0B\u56FE\u4E2D\uFF0C\u5F53\u524D\u5206\u652F\u662F<em>main</em>\u3002 \u5728\u8FD0\u884C\u547D\u4EE4\u4E4B\u524D\uFF0C<em>main</em>\u6307\u5411<em>ed489</em>\uFF0C\u63D0\u4EA4\u540E\uFF0C<em>main</em>\u6307\u5411\u65B0\u7684\u8282\u70B9<em>f0cec</em>\u5E76\u4EE5<em>ed489</em>\u4F5C\u4E3A\u7236\u8282\u70B9\u3002</p><p><img src="http://marklodato.github.io/visual-git-guide/commit-main.svg" alt="img"></p>',19),J=t("\u5373\u4FBF\u5F53\u524D\u5206\u652F\u662F\u67D0\u6B21\u63D0\u4EA4\u7684\u7956\u7236\u8282\u70B9\uFF0Cgit\u4F1A\u540C\u6837\u64CD\u4F5C\u3002\u4E0B\u56FE\u4E2D\uFF0C\u5728"),K=e("em",null,"main",-1),O=t("\u5206\u652F\u7684\u7956\u7236\u8282\u70B9"),Q=e("em",null,"stable",-1),U=t("\u5206\u652F\u8FDB\u884C\u4E00\u6B21\u63D0\u4EA4\uFF0C\u751F\u6210\u4E86"),W=e("em",null,"1800b",-1),X=t("\u3002 \u8FD9\u6837\uFF0C"),Y=e("em",null,"stable",-1),Z=t("\u5206\u652F\u5C31\u4E0D\u518D\u662F"),$=e("em",null,"main",-1),ee=t("\u5206\u652F\u7684\u7956\u7236\u8282\u70B9\u3002\u6B64\u65F6\uFF0C"),te={href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html#merge",target:"_blank",rel:"noopener noreferrer"},ie=t("\u5408\u5E76"),oe=t(" (\u6216\u8005 "),ae={href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html#rebase",target:"_blank",rel:"noopener noreferrer"},se=t("\u884D\u5408"),re=t(") \u662F\u5FC5\u987B\u7684\u3002"),de=e("p",null,[e("img",{src:"http://marklodato.github.io/visual-git-guide/commit-stable.svg",alt:"img"})],-1),he=e("p",null,[t("\u5982\u679C\u60F3\u66F4\u6539\u4E00\u6B21\u63D0\u4EA4\uFF0C\u4F7F\u7528 "),e("code",null,"git commit --amend"),t("\u3002git\u4F1A\u4F7F\u7528\u4E0E\u5F53\u524D\u63D0\u4EA4\u76F8\u540C\u7684\u7236\u8282\u70B9\u8FDB\u884C\u4E00\u6B21\u65B0\u63D0\u4EA4\uFF0C\u65E7\u7684\u63D0\u4EA4\u4F1A\u88AB\u53D6\u6D88\u3002")],-1),ne=e("p",null,[e("img",{src:"http://marklodato.github.io/visual-git-guide/commit-amend.svg",alt:"img"})],-1),ce=t("\u53E6\u4E00\u4E2A\u4F8B\u5B50\u662F"),le={href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html#detached",target:"_blank",rel:"noopener noreferrer"},ge=t("\u5206\u79BBHEAD\u63D0\u4EA4"),_e=t(",\u540E\u6587\u8BB2\u3002"),me=a('<h3 id="checkout" tabindex="-1"><a class="header-anchor" href="#checkout" aria-hidden="true">#</a> Checkout</h3><p>checkout\u547D\u4EE4\u7528\u4E8E\u4ECE\u5386\u53F2\u63D0\u4EA4\uFF08\u6216\u8005\u6682\u5B58\u533A\u57DF\uFF09\u4E2D\u62F7\u8D1D\u6587\u4EF6\u5230\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u4E5F\u53EF\u7528\u4E8E\u5207\u6362\u5206\u652F\u3002</p><p>\u5F53\u7ED9\u5B9A\u67D0\u4E2A\u6587\u4EF6\u540D\uFF08\u6216\u8005\u6253\u5F00-p\u9009\u9879\uFF0C\u6216\u8005\u6587\u4EF6\u540D\u548C-p\u9009\u9879\u540C\u65F6\u6253\u5F00\uFF09\u65F6\uFF0Cgit\u4F1A\u4ECE\u6307\u5B9A\u7684\u63D0\u4EA4\u4E2D\u62F7\u8D1D\u6587\u4EF6\u5230\u6682\u5B58\u533A\u57DF\u548C\u5DE5\u4F5C\u76EE\u5F55\u3002\u6BD4\u5982\uFF0C<code>git checkout HEAD~ foo.c</code>\u4F1A\u5C06\u63D0\u4EA4\u8282\u70B9<em>HEAD~</em>(\u5373\u5F53\u524D\u63D0\u4EA4\u8282\u70B9\u7684\u7236\u8282\u70B9)\u4E2D\u7684<code>foo.c</code>\u590D\u5236\u5230\u5DE5\u4F5C\u76EE\u5F55\u5E76\u4E14\u52A0\u5230\u6682\u5B58\u533A\u57DF\u4E2D\u3002\uFF08\u5982\u679C\u547D\u4EE4\u4E2D\u6CA1\u6709\u6307\u5B9A\u63D0\u4EA4\u8282\u70B9\uFF0C\u5219\u4F1A\u4ECE\u6682\u5B58\u533A\u57DF\u4E2D\u62F7\u8D1D\u5185\u5BB9\u3002\uFF09\u6CE8\u610F\u5F53\u524D\u5206\u652F\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\u3002</p><p><img src="http://marklodato.github.io/visual-git-guide/checkout-files.svg" alt="img"></p><p>\u5F53\u4E0D\u6307\u5B9A\u6587\u4EF6\u540D\uFF0C\u800C\u662F\u7ED9\u51FA\u4E00\u4E2A\uFF08\u672C\u5730\uFF09\u5206\u652F\u65F6\uFF0C\u90A3\u4E48<em>HEAD</em>\u6807\u8BC6\u4F1A\u79FB\u52A8\u5230\u90A3\u4E2A\u5206\u652F\uFF08\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6211\u4EEC\u201C\u5207\u6362\u201D\u5230\u90A3\u4E2A\u5206\u652F\u4E86\uFF09\uFF0C\u7136\u540E\u6682\u5B58\u533A\u57DF\u548C\u5DE5\u4F5C\u76EE\u5F55\u4E2D\u7684\u5185\u5BB9\u4F1A\u548C<em>HEAD</em>\u5BF9\u5E94\u7684\u63D0\u4EA4\u8282\u70B9\u4E00\u81F4\u3002\u65B0\u63D0\u4EA4\u8282\u70B9\uFF08\u4E0B\u56FE\u4E2D\u7684a47c3\uFF09\u4E2D\u7684\u6240\u6709\u6587\u4EF6\u90FD\u4F1A\u88AB\u590D\u5236\uFF08\u5230\u6682\u5B58\u533A\u57DF\u548C\u5DE5\u4F5C\u76EE\u5F55\u4E2D\uFF09\uFF1B\u53EA\u5B58\u5728\u4E8E\u8001\u7684\u63D0\u4EA4\u8282\u70B9\uFF08ed489\uFF09\u4E2D\u7684\u6587\u4EF6\u4F1A\u88AB\u5220\u9664\uFF1B\u4E0D\u5C5E\u4E8E\u4E0A\u8FF0\u4E24\u8005\u7684\u6587\u4EF6\u4F1A\u88AB\u5FFD\u7565\uFF0C\u4E0D\u53D7\u5F71\u54CD\u3002</p><p><img src="http://marklodato.github.io/visual-git-guide/checkout-branch.svg" alt="img"></p>',6),ue=t("\u5982\u679C\u65E2\u6CA1\u6709\u6307\u5B9A\u6587\u4EF6\u540D\uFF0C\u4E5F\u6CA1\u6709\u6307\u5B9A\u5206\u652F\u540D\uFF0C\u800C\u662F\u4E00\u4E2A\u6807\u7B7E\u3001\u8FDC\u7A0B\u5206\u652F\u3001SHA-1\u503C\u6216\u8005\u662F\u50CF"),pe=e("em",null,"main~3",-1),be=t("\u7C7B\u4F3C\u7684\u4E1C\u897F\uFF0C\u5C31\u5F97\u5230\u4E00\u4E2A\u533F\u540D\u5206\u652F\uFF0C\u79F0\u4F5C"),ke=e("em",null,"detached HEAD",-1),fe=t("\uFF08\u88AB\u5206\u79BB\u7684"),ve=e("em",null,"HEAD",-1),xe=t("\u6807\u8BC6\uFF09\u3002\u8FD9\u6837\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5730\u5728\u5386\u53F2\u7248\u672C\u4E4B\u95F4\u4E92\u76F8\u5207\u6362\u3002\u6BD4\u5982\u8BF4\u4F60\u60F3\u8981\u7F16\u8BD11.6.6.1\u7248\u672C\u7684git\uFF0C\u4F60\u53EF\u4EE5\u8FD0\u884C"),De=e("code",null,"git checkout v1.6.6.1",-1),Ee=t("\uFF08\u8FD9\u662F\u4E00\u4E2A\u6807\u7B7E\uFF0C\u800C\u975E\u5206\u652F\u540D\uFF09\uFF0C\u7F16\u8BD1\uFF0C\u5B89\u88C5\uFF0C\u7136\u540E\u5207\u6362\u56DE\u53E6\u4E00\u4E2A\u5206\u652F\uFF0C\u6BD4\u5982\u8BF4"),He=e("code",null,"git checkout main",-1),ze=t("\u3002\u7136\u800C\uFF0C\u5F53\u63D0\u4EA4\u64CD\u4F5C\u6D89\u53CA\u5230\u201C\u5206\u79BB\u7684HEAD\u201D\u65F6\uFF0C\u5176\u884C\u4E3A\u4F1A\u7565\u6709\u4E0D\u540C\uFF0C\u8BE6\u60C5\u89C1\u5728"),Ae={href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html#detached",target:"_blank",rel:"noopener noreferrer"},ye=t("\u4E0B\u9762"),we=t("\u3002"),Ce=a('<p><img src="http://marklodato.github.io/visual-git-guide/checkout-detached.svg" alt="img"></p><h3 id="head\u6807\u8BC6\u5904\u4E8E\u5206\u79BB\u72B6\u6001\u65F6\u7684\u63D0\u4EA4\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#head\u6807\u8BC6\u5904\u4E8E\u5206\u79BB\u72B6\u6001\u65F6\u7684\u63D0\u4EA4\u64CD\u4F5C" aria-hidden="true">#</a> HEAD\u6807\u8BC6\u5904\u4E8E\u5206\u79BB\u72B6\u6001\u65F6\u7684\u63D0\u4EA4\u64CD\u4F5C</h3><p>\u5F53<em>HEAD</em>\u5904\u4E8E\u5206\u79BB\u72B6\u6001\uFF08\u4E0D\u4F9D\u9644\u4E8E\u4EFB\u4E00\u5206\u652F\uFF09\u65F6\uFF0C\u63D0\u4EA4\u64CD\u4F5C\u53EF\u4EE5\u6B63\u5E38\u8FDB\u884C\uFF0C\u4F46\u662F\u4E0D\u4F1A\u66F4\u65B0\u4EFB\u4F55\u5DF2\u547D\u540D\u7684\u5206\u652F\u3002(\u4F60\u53EF\u4EE5\u8BA4\u4E3A\u8FD9\u662F\u5728\u66F4\u65B0\u4E00\u4E2A\u533F\u540D\u5206\u652F\u3002)</p><p><img src="http://marklodato.github.io/visual-git-guide/commit-detached.svg" alt="img"></p><p>\u4E00\u65E6\u6B64\u540E\u4F60\u5207\u6362\u5230\u522B\u7684\u5206\u652F\uFF0C\u6BD4\u5982\u8BF4<em>main</em>\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u63D0\u4EA4\u8282\u70B9\uFF08\u53EF\u80FD\uFF09\u518D\u4E5F\u4E0D\u4F1A\u88AB\u5F15\u7528\u5230\uFF0C\u7136\u540E\u5C31\u4F1A\u88AB\u4E22\u5F03\u6389\u4E86\u3002\u6CE8\u610F\u8FD9\u4E2A\u547D\u4EE4\u4E4B\u540E\u5C31\u4E0D\u4F1A\u6709\u4E1C\u897F\u5F15\u7528<em>2eecb</em>\u3002</p><p><img src="http://marklodato.github.io/visual-git-guide/checkout-after-detached.svg" alt="img"></p><p>\u4F46\u662F\uFF0C\u5982\u679C\u4F60\u60F3\u4FDD\u5B58\u8FD9\u4E2A\u72B6\u6001\uFF0C\u53EF\u4EE5\u7528\u547D\u4EE4<code>git checkout -b *name*</code>\u6765\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5206\u652F\u3002</p><p><img src="http://marklodato.github.io/visual-git-guide/checkout-b-detached.svg" alt="img"></p><h3 id="reset" tabindex="-1"><a class="header-anchor" href="#reset" aria-hidden="true">#</a> Reset</h3><p>reset\u547D\u4EE4\u628A\u5F53\u524D\u5206\u652F\u6307\u5411\u53E6\u4E00\u4E2A\u4F4D\u7F6E\uFF0C\u5E76\u4E14\u6709\u9009\u62E9\u7684\u53D8\u52A8\u5DE5\u4F5C\u76EE\u5F55\u548C\u7D22\u5F15\u3002\u4E5F\u7528\u6765\u5728\u4ECE\u5386\u53F2\u4ED3\u5E93\u4E2D\u590D\u5236\u6587\u4EF6\u5230\u7D22\u5F15\uFF0C\u800C\u4E0D\u52A8\u5DE5\u4F5C\u76EE\u5F55\u3002</p><p>\u5982\u679C\u4E0D\u7ED9\u9009\u9879\uFF0C\u90A3\u4E48\u5F53\u524D\u5206\u652F\u6307\u5411\u5230\u90A3\u4E2A\u63D0\u4EA4\u3002\u5982\u679C\u7528<code>--hard</code>\u9009\u9879\uFF0C\u90A3\u4E48\u5DE5\u4F5C\u76EE\u5F55\u4E5F\u66F4\u65B0\uFF0C\u5982\u679C\u7528<code>--soft</code>\u9009\u9879\uFF0C\u90A3\u4E48\u90FD\u4E0D\u53D8\u3002</p><p><img src="http://marklodato.github.io/visual-git-guide/reset-commit.svg" alt="img"></p><p>\u5982\u679C\u6CA1\u6709\u7ED9\u51FA\u63D0\u4EA4\u70B9\u7684\u7248\u672C\u53F7\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u7528<em>HEAD</em>\u3002\u8FD9\u6837\uFF0C\u5206\u652F\u6307\u5411\u4E0D\u53D8\uFF0C\u4F46\u662F\u7D22\u5F15\u4F1A\u56DE\u6EDA\u5230\u6700\u540E\u4E00\u6B21\u63D0\u4EA4\uFF0C\u5982\u679C\u7528<code>--hard</code>\u9009\u9879\uFF0C\u5DE5\u4F5C\u76EE\u5F55\u4E5F\u540C\u6837\u3002</p><p><img src="http://marklodato.github.io/visual-git-guide/reset.svg" alt="img"></p>',14),Ge=t("\u5982\u679C\u7ED9\u4E86\u6587\u4EF6\u540D(\u6216\u8005 "),Ve=e("code",null,"-p",-1),Ne=t("\u9009\u9879), \u90A3\u4E48\u5DE5\u4F5C\u6548\u679C\u548C\u5E26\u6587\u4EF6\u540D\u7684"),Re={href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html#checkout",target:"_blank",rel:"noopener noreferrer"},Se=t("checkout"),Be=t("\u5DEE\u4E0D\u591A\uFF0C\u9664\u4E86\u7D22\u5F15\u88AB\u66F4\u65B0\u3002"),Ie=e("p",null,[e("img",{src:"http://marklodato.github.io/visual-git-guide/reset-files.svg",alt:"img"})],-1),Le=e("h3",{id:"merge",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#merge","aria-hidden":"true"},"#"),t(" Merge")],-1),Me=e("p",null,[t("merge \u547D\u4EE4\u628A\u4E0D\u540C\u5206\u652F\u5408\u5E76\u8D77\u6765\u3002\u5408\u5E76\u524D\uFF0C\u7D22\u5F15\u5FC5\u987B\u548C\u5F53\u524D\u63D0\u4EA4\u76F8\u540C\u3002\u5982\u679C\u53E6\u4E00\u4E2A\u5206\u652F\u662F\u5F53\u524D\u63D0\u4EA4\u7684\u7956\u7236\u8282\u70B9\uFF0C\u90A3\u4E48\u5408\u5E76\u547D\u4EE4\u5C06\u4EC0\u4E48\u4E5F\u4E0D\u505A\u3002 \u53E6\u4E00\u79CD\u60C5\u51B5\u662F\u5982\u679C\u5F53\u524D\u63D0\u4EA4\u662F\u53E6\u4E00\u4E2A\u5206\u652F\u7684\u7956\u7236\u8282\u70B9\uFF0C\u5C31\u5BFC\u81F4"),e("em",null,"fast-forward"),t("\u5408\u5E76\u3002\u6307\u5411\u53EA\u662F\u7B80\u5355\u7684\u79FB\u52A8\uFF0C\u5E76\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u63D0\u4EA4\u3002")],-1),qe=e("p",null,[e("img",{src:"http://marklodato.github.io/visual-git-guide/merge-ff.svg",alt:"img"})],-1),Fe=t("\u5426\u5219\u5C31\u662F\u4E00\u6B21\u771F\u6B63\u7684\u5408\u5E76\u3002\u9ED8\u8BA4\u628A\u5F53\u524D\u63D0\u4EA4("),Pe=e("em",null,"ed489",-1),Te=t(" \u5982\u4E0B\u6240\u793A)\u548C\u53E6\u4E00\u4E2A\u63D0\u4EA4("),je=e("em",null,"33104",-1),Je=t(")\u4EE5\u53CA\u4ED6\u4EEC\u7684\u5171\u540C\u7956\u7236\u8282\u70B9("),Ke=e("em",null,"b325c",-1),Oe=t(")\u8FDB\u884C\u4E00\u6B21"),Qe={href:"http://en.wikipedia.org/wiki/Three-way_merge",target:"_blank",rel:"noopener noreferrer"},Ue=t("\u4E09\u65B9\u5408\u5E76"),We=t("\u3002\u7ED3\u679C\u662F\u5148\u4FDD\u5B58\u5F53\u524D\u76EE\u5F55\u548C\u7D22\u5F15\uFF0C\u7136\u540E\u548C\u7236\u8282\u70B9"),Xe=e("em",null,"33104",-1),Ye=t("\u4E00\u8D77\u505A\u4E00\u6B21\u65B0\u63D0\u4EA4\u3002"),Ze=a('<p><img src="http://marklodato.github.io/visual-git-guide/merge.svg" alt="img"></p><h3 id="cherry-pick" tabindex="-1"><a class="header-anchor" href="#cherry-pick" aria-hidden="true">#</a> Cherry Pick</h3><p>cherry-pick\u547D\u4EE4&quot;\u590D\u5236&quot;\u4E00\u4E2A\u63D0\u4EA4\u8282\u70B9\u5E76\u5728\u5F53\u524D\u5206\u652F\u505A\u4E00\u6B21\u5B8C\u5168\u4E00\u6837\u7684\u65B0\u63D0\u4EA4\u3002</p><p><img src="http://marklodato.github.io/visual-git-guide/cherry-pick.svg" alt="img"></p><h3 id="rebase" tabindex="-1"><a class="header-anchor" href="#rebase" aria-hidden="true">#</a> Rebase</h3>',5),$e=t("\u884D\u5408\u662F\u5408\u5E76\u547D\u4EE4\u7684\u53E6\u4E00\u79CD\u9009\u62E9\u3002\u5408\u5E76\u628A\u4E24\u4E2A\u7236\u5206\u652F\u5408\u5E76\u8FDB\u884C\u4E00\u6B21\u63D0\u4EA4\uFF0C\u63D0\u4EA4\u5386\u53F2\u4E0D\u662F\u7EBF\u6027\u7684\u3002\u884D\u5408\u5728\u5F53\u524D\u5206\u652F\u4E0A\u91CD\u6F14\u53E6\u4E00\u4E2A\u5206\u652F\u7684\u5386\u53F2\uFF0C\u63D0\u4EA4\u5386\u53F2\u662F\u7EBF\u6027\u7684\u3002 \u672C\u8D28\u4E0A\uFF0C\u8FD9\u662F\u7EBF\u6027\u5316\u7684\u81EA\u52A8\u7684 "),et={href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html#cherry-pick",target:"_blank",rel:"noopener noreferrer"},tt=t("cherry-pick"),it=a('<p><img src="http://marklodato.github.io/visual-git-guide/rebase.svg" alt="img"></p><p>\u4E0A\u9762\u7684\u547D\u4EE4\u90FD\u5728<em>topic</em>\u5206\u652F\u4E2D\u8FDB\u884C\uFF0C\u800C\u4E0D\u662F<em>main</em>\u5206\u652F\uFF0C\u5728<em>main</em>\u5206\u652F\u4E0A\u91CD\u6F14\uFF0C\u5E76\u4E14\u628A\u5206\u652F\u6307\u5411\u65B0\u7684\u8282\u70B9\u3002\u6CE8\u610F\u65E7\u63D0\u4EA4\u6CA1\u6709\u88AB\u5F15\u7528\uFF0C\u5C06\u88AB\u56DE\u6536\u3002</p><p>\u8981\u9650\u5236\u56DE\u6EDA\u8303\u56F4\uFF0C\u4F7F\u7528<code>--onto</code>\u9009\u9879\u3002\u4E0B\u9762\u7684\u547D\u4EE4\u5728<em>main</em>\u5206\u652F\u4E0A\u91CD\u6F14\u5F53\u524D\u5206\u652F\u4ECE<em>169a6</em>\u4EE5\u6765\u7684\u6700\u8FD1\u51E0\u4E2A\u63D0\u4EA4\uFF0C\u5373<em>2c33a</em>\u3002</p><p><img src="http://marklodato.github.io/visual-git-guide/rebase-onto.svg" alt="img"></p>',4),ot=t("\u540C\u6837\u6709"),at=e("code",null,"git rebase --interactive",-1),st=t("\u8BA9\u4F60\u66F4\u65B9\u4FBF\u7684\u5B8C\u6210\u4E00\u4E9B\u590D\u6742\u64CD\u4F5C\uFF0C\u6BD4\u5982\u4E22\u5F03\u3001\u91CD\u6392\u3001\u4FEE\u6539\u3001\u5408\u5E76\u63D0\u4EA4\u3002\u6CA1\u6709\u56FE\u7247\u4F53\u73B0\u8FD9\u4E9B\uFF0C\u7EC6\u8282\u770B\u8FD9\u91CC:"),rt={href:"http://www.kernel.org/pub/software/scm/git/docs/git-rebase.html#_interactive_mode",target:"_blank",rel:"noopener noreferrer"},dt=t("git-rebase(1)"),ht=a('<h2 id="\u6280\u672F\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u8BF4\u660E" aria-hidden="true">#</a> \u6280\u672F\u8BF4\u660E</h2><p>\u6587\u4EF6\u5185\u5BB9\u5E76\u6CA1\u6709\u771F\u6B63\u5B58\u50A8\u5728\u7D22\u5F15(<em>.git/index</em>)\u6216\u8005\u63D0\u4EA4\u5BF9\u8C61\u4E2D\uFF0C\u800C\u662F\u4EE5blob\u7684\u5F62\u5F0F\u5206\u522B\u5B58\u50A8\u5728\u6570\u636E\u5E93\u4E2D(<em>.git/objects</em>)\uFF0C\u5E76\u7528SHA-1\u503C\u6765\u6821\u9A8C\u3002 \u7D22\u5F15\u6587\u4EF6\u7528\u8BC6\u522B\u7801\u5217\u51FA\u76F8\u5173\u7684blob\u6587\u4EF6\u4EE5\u53CA\u522B\u7684\u6570\u636E\u3002\u5BF9\u4E8E\u63D0\u4EA4\u6765\u8BF4\uFF0C\u4EE5\u6811(<em>tree</em>)\u7684\u5F62\u5F0F\u5B58\u50A8\uFF0C\u540C\u6837\u7528\u5BF9\u4E8E\u7684\u54C8\u5E0C\u503C\u8BC6\u522B\u3002\u6811\u5BF9\u5E94\u7740\u5DE5\u4F5C\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u5939\uFF0C\u6811\u4E2D\u5305\u542B\u7684 \u6811\u6216\u8005blob\u5BF9\u8C61\u5BF9\u5E94\u7740\u76F8\u5E94\u7684\u5B50\u76EE\u5F55\u548C\u6587\u4EF6\u3002\u6BCF\u6B21\u63D0\u4EA4\u90FD\u5B58\u50A8\u4E0B\u5B83\u7684\u4E0A\u4E00\u7EA7\u6811\u7684\u8BC6\u522B\u7801\u3002</p><p>\u5982\u679C\u7528detached HEAD\u63D0\u4EA4\uFF0C\u90A3\u4E48\u6700\u540E\u4E00\u6B21\u63D0\u4EA4\u4F1A\u88ABthe reflog for HEAD\u5F15\u7528\u3002\u4F46\u662F\u8FC7\u4E00\u6BB5\u65F6\u95F4\u5C31\u5931\u6548\uFF0C\u6700\u7EC8\u88AB\u56DE\u6536\uFF0C\u4E0E<code>git commit --amend</code>\u6216\u8005<code>git rebase</code>\u5F88\u50CF\u3002</p>',3);function nt(ct,lt){const i=r("ExternalLinkIcon");return d(),h(n,null,[l,e("p",null,[g,e("a",_,[m,o(i)])]),e("p",null,[u,e("a",p,[b,o(i)]),k]),f,e("ol",null,[e("li",null,[e("a",v,[x,o(i)])]),e("li",null,[e("a",D,[E,o(i)])]),e("li",null,[H,e("ol",null,[e("li",null,[e("a",z,[A,o(i)])]),e("li",null,[e("a",y,[w,o(i)])]),e("li",null,[e("a",C,[G,o(i)])]),e("li",null,[e("a",V,[N,o(i)])]),e("li",null,[e("a",R,[S,o(i)])]),e("li",null,[e("a",B,[I,o(i)])]),e("li",null,[e("a",L,[M,o(i)])]),e("li",null,[e("a",q,[F,o(i)])])])]),e("li",null,[e("a",P,[T,o(i)])])]),j,e("p",null,[J,K,O,Q,U,W,X,Y,Z,$,ee,e("a",te,[ie,o(i)]),oe,e("a",ae,[se,o(i)]),re]),de,he,ne,e("p",null,[ce,e("a",le,[ge,o(i)]),_e]),me,e("p",null,[ue,pe,be,ke,fe,ve,xe,De,Ee,He,ze,e("a",Ae,[ye,o(i)]),we]),Ce,e("p",null,[Ge,Ve,Ne,e("a",Re,[Se,o(i)]),Be]),Ie,Le,Me,qe,e("p",null,[Fe,Pe,Te,je,Je,Ke,Oe,e("a",Qe,[Ue,o(i)]),We,Xe,Ye]),Ze,e("p",null,[$e,e("a",et,[tt,o(i)])]),it,e("p",null,[ot,at,st,e("a",rt,[dt,o(i)])]),ht],64)}var _t=s(c,[["render",nt],["__file","\u56FE\u89E3Git.html.vue"]]);export{_t as default};
