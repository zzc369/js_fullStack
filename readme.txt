Git is a distributed version control system.
Git is a free software under the GPL.
git add
git commit -m ""
git status 
git diff filename
git log  显示各版本
git log --pretty=oneline  将版本显示在一行
git reset --hard HEAD^ 一个^就是将版本往前移一个版本
git  reset --hard 版本号的前五位
HEAD -> master 表示当前的版本，类似于指针
git reflog 将所有的版本都显示出来
git reset HEAD filename 可以将提交到暂存区的文件撤回
git rm 将删除的请求提交上去
rm filename 删除文件
git remote add origin + git上的源地址 
git push -u origin master 将文件推送到origin(源)的master分支上 -u 是第一次使用的时候才需要，后面就不需要了。
git  push origin master 

git checkout --filename 可以将文件还原到上一次在暂存区或是提交后的样子
git checkout -b branch1(name) 新建一个分支,并转到新的分支上
git checkout name(分支名)  转到分支上
git branch 查看指针在哪个分支上
git log --oneline --graph

git rebase master
git merge +分支名

git cherry-pick 版本号  


// 终端
	"terminal.integrated.shell.windows": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
	// "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe",
	// "terminal.integrated.shell.windows": "D:\\nodejs\\node.exe",
	// "terminal.integrated.shell.windows": "D:\\Git\\bin\\bash.exe",


npm config set registry http://registry.npm.taobao.org/

yarn config set registry http://registry.npm.taobao.org/
