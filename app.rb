require 'sinatra'

get '/' do
	erb :home
end

get '/about' do
	erb :about
end

get '/activities' do
	erb :activities
end

get '/contact' do
	erb :contact
end