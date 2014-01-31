require 'rake'
require 'rake/clean'

Home = Rake.original_dir

@tasks_help = []
def hdoc command, desc
  @tasks_help << [command, desc]
end

ClobberList = [
  "#{Home}/*.deb",
  "#{Home}/app/**/*.js",
  "#{Home}/config/**/*.js",
  "#{Home}/lib/**/*.js",
]

CoffeeBin = "node_modules/.bin/coffee"

CLOBBER.include(ClobberList)

task :default => [:help]

task :help do
  @tasks_help.each do |task|
    if task[1].size > 0
      output = "  rake %-20s: %s" % [task[0], task[1]]
    else
      output = "\n+ %-30s %s\n\n" % [task[0], '*'*60 ]
    end
    puts output
  end
end

hdoc 'init', 'npm install: download all dependencies.'
task :init do
  sh "npm install"
end

hdoc 'run', 'run the spell checker'
task :run do
  sh "compound s 8888"
end

hdoc 'spec', 'run unit tests'
task :spec do
  sh "./node_modules/.bin/mocha -R spec --recursive spec"
end

hdoc 'spec_run', 'run unit tests followed by spell checker'
task :spec_run => [:spec, :run]

hdoc'compile', 'compile coffee-script codes to javascript.'
task :compile => [:clobber] do
  sh "rm -rf "
  sh "#{CoffeeBin} -o . -c src/"
end
