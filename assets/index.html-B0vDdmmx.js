import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as a,o as l}from"./app-CyOKwk5-.js";const n="/assets/oracle1-DjI87y0z.png",t={};function p(r,i){return l(),e("div",null,i[0]||(i[0]=[a('<h1 id="oracle" tabindex="-1"><a class="header-anchor" href="#oracle"><span>oracle</span></a></h1><h2 id="一、逻辑图" tabindex="-1"><a class="header-anchor" href="#一、逻辑图"><span>一、逻辑图</span></a></h2><figure><img src="'+n+`" alt="oracle 的运行环境" tabindex="0" loading="lazy"><figcaption>oracle 的运行环境</figcaption></figure><ol><li><p><strong>物理部分</strong>：ctl 控制文件       数据文件       .log 日志文件</p></li><li><p><strong>实例部分</strong>：内存结构（200多M 缓存）系统全局区域</p></li><li><p><code>PGA</code>：每个用户独有的区域。</p><p><code>PMON</code> 是控制SGA 和 PGA 联系。</p><p><code>DBWR</code>：数据读写</p><p><code>LGWR</code>：日志读写</p><p><code>CKPT</code>：检查点进程，主要控制事务。</p></li><li><p><code>SGA</code>：system  global area。</p></li></ol><h2 id="二、包含" tabindex="-1"><a class="header-anchor" href="#二、包含"><span>二、包含</span></a></h2><ul><li><code>DML [Data Manipulation Language]</code> 数据操作语言 INSERT UPDATE DELETE</li><li><code>DQL [Data Query Language]</code> 数据查询语言 SELETE</li><li><code>DDL [Data Definition Language]</code> 数据定义语言 CREATE DROP ALTER</li><li><code>DCL [Data Control Language]</code> 数据库控制语言 GRANT、REVOKE</li><li><code>TCL</code> 事务控制语言</li></ul><h2 id="三、持久化" tabindex="-1"><a class="header-anchor" href="#三、持久化"><span>三、持久化</span></a></h2><ol><li><p><strong>持久化</strong>包括 读 和 写</p></li><li><p><strong>数据</strong>存在于 表中 --&gt; 表空间 --&gt; 实例 --&gt; 数据库</p></li><li><p><strong>持久化步骤</strong>：</p><ul><li><p>创建表空间</p></li><li><p>创建自己的数据文件</p></li><li><p>创建用户</p></li><li><p>登陆自己的用户开始创建表</p></li><li><p>为了确保数据准确性 --&gt;约束</p></li><li><p>增删查改</p></li></ul></li><li><p><strong>谁能创建表空间</strong></p><ul><li><p><code>system</code> 数据层面的DBA</p></li><li><p><code>sys</code> 运维超级管理员，保证实例的运行</p></li></ul></li></ol><h2 id="四、创建表空间" tabindex="-1"><a class="header-anchor" href="#四、创建表空间"><span>四、创建表空间</span></a></h2><ol><li><p><strong>语法</strong></p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">create</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  tablespace </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[名称如右侧：]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> spc_hm302</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">datafile </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39; D:\\ datafiles\\hm_302.dbf ，D:\\ datafiles\\hm_302_01.dbf  &#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 30M </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">autoextend </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(开启)  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">---&gt;正常情况要关闭，假如以后这个数据库废弃，自己会越来越大。</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 10M ; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--关闭时不写</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>删除表空间</strong></p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">drop</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> table</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">space spc_hm302 including  contents </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">AND</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> datafiles;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h2 id="五、创建用户" tabindex="-1"><a class="header-anchor" href="#五、创建用户"><span>五、创建用户</span></a></h2><ol><li><p><strong>场景</strong></p><p>用来操作表空间</p></li><li><p><strong>语法</strong></p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">create</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> user</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hm302</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">identified </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">by</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> orcl</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> tablespace spc_hm302;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>注意</strong></p><p>3.1. 没有指定表空间的用户，会自动放到user的表空间中，这个表空间是自动增长的</p><p>3.2. 新创建的用户，是没有任何权限的，oracle 是非常安全的 注重权限管理</p><p>3.3. 因为权限过多 赋予权限的时候不好操作，所以oracle 设定好了，直接赋予就行</p></li><li><p><code>connect</code> 一般用户，只有登陆查询权限</p></li><li><p><code>resource</code> 更为正式的角色，可以增删该查，一般是程序员拥有</p></li><li><p><code>dba</code> dba权限，很厉害，所以不要用</p></li></ol><h2 id="六、赋予权限" tabindex="-1"><a class="header-anchor" href="#六、赋予权限"><span>六、赋予权限</span></a></h2><ol><li><p><strong>语法</strong></p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">grant</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> connect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">resource</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> hm302</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p><strong>收回权限</strong></p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">revoke</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> connect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">resource</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> hm302</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol>`,14)]))}const o=s(t,[["render",p],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/dbs/Oracle/","title":"oracle","lang":"zh-CN","frontmatter":{"description":"oracle 一、逻辑图 oracle 的运行环境oracle 的运行环境 物理部分：ctl 控制文件 数据文件 .log 日志文件 实例部分：内存结构（200多M 缓存）系统全局区域 PGA：每个用户独有的区域。 PMON 是控制SGA 和 PGA 联系。 DBWR：数据读写 LGWR：日志读写 CKPT：检查点进程，主要控制事务。 SGA：syst...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/dbs/Oracle/"}],["meta",{"property":"og:site_name","content":"CODER LIANG"}],["meta",{"property":"og:title","content":"oracle"}],["meta",{"property":"og:description","content":"oracle 一、逻辑图 oracle 的运行环境oracle 的运行环境 物理部分：ctl 控制文件 数据文件 .log 日志文件 实例部分：内存结构（200多M 缓存）系统全局区域 PGA：每个用户独有的区域。 PMON 是控制SGA 和 PGA 联系。 DBWR：数据读写 LGWR：日志读写 CKPT：检查点进程，主要控制事务。 SGA：syst..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-24T02:33:50.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-24T02:33:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"oracle\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-24T02:33:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Coder Liang\\",\\"url\\":\\"https://blog.csdn.net/Phone_1070333541?type=blog\\"}]}"]]},"headers":[{"level":2,"title":"一、逻辑图","slug":"一、逻辑图","link":"#一、逻辑图","children":[]},{"level":2,"title":"二、包含","slug":"二、包含","link":"#二、包含","children":[]},{"level":2,"title":"三、持久化","slug":"三、持久化","link":"#三、持久化","children":[]},{"level":2,"title":"四、创建表空间","slug":"四、创建表空间","link":"#四、创建表空间","children":[]},{"level":2,"title":"五、创建用户","slug":"五、创建用户","link":"#五、创建用户","children":[]},{"level":2,"title":"六、赋予权限","slug":"六、赋予权限","link":"#六、赋予权限","children":[]}],"git":{"createdTime":1737686030000,"updatedTime":1737686030000,"contributors":[{"name":"liangxinglong","username":"liangxinglong","email":"16630935153@163.com","commits":1,"url":"https://github.com/liangxinglong"}]},"readingTime":{"minutes":1.81,"words":543},"filePathRelative":"dbs/Oracle/README.md","localizedDate":"2025年1月24日","excerpt":"\\n<h2>一、逻辑图</h2>\\n<figure><figcaption>oracle&nbsp;的运行环境</figcaption></figure>\\n<ol>\\n<li>\\n<p><strong>物理部分</strong>：ctl 控制文件&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数据文件&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.log 日志文件</p>\\n</li>\\n<li>\\n<p><strong>实例部分</strong>：内存结构（200多M&nbsp;缓存）系统全局区域</p>\\n</li>\\n<li>\\n<p><code>PGA</code>：每个用户独有的区域。</p>\\n<p><code>PMON</code>&nbsp;是控制SGA&nbsp;和&nbsp;PGA&nbsp;联系。</p>\\n<p><code>DBWR</code>：数据读写</p>\\n<p><code>LGWR</code>：日志读写</p>\\n<p><code>CKPT</code>：检查点进程，主要控制事务。</p>\\n</li>\\n<li>\\n<p><code>SGA</code>：system&nbsp;&nbsp;global&nbsp;area。</p>\\n</li>\\n</ol>","autoDesc":true}');export{o as comp,c as data};
