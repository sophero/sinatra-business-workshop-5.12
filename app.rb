require 'sinatra'

get '/' do
	@home="active"
	erb :home
end

get '/about' do
	@about="active"
	erb :about
end

get '/activities' do
	@activities="active"
	erb :activities
end

get '/contact' do
	@contact="active"
	erb :contact
end
