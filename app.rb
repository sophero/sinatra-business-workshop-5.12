require 'sinatra'

get '/' do
	@class_1="active"
	erb :home
end

get '/about' do
	@class_2="active"
	erb :about
end

get '/activities' do
	@class_3="active"
	erb :activities
end

get '/contact' do
	@class_4="active"
	erb :contact
end
