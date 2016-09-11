# config valid only for current version of Capistrano
lock '3.6.1'

set :application, 'email_list'
set :repo_url, 'git@github.com:TravisSpangle/EmailListApp.git'
set :tmp_dir, "/home/deploy/tmp"
