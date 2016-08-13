# Handles web request/response
require 'sinatra/base'
require 'EmailList'
require_relative 'email_clean'

using EmailClean

module EmailListApp
    class API < Sinatra::Base
      post '/uniq' do
        raise TypeError, "This is not a valid list" unless params['emails'] =~ /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/

        emails = params['emails'].remove_leading_comma.trailing_comma.white_space.split(',')

        EmailList.uniq( emails ).join(",")
      end
    end
end
