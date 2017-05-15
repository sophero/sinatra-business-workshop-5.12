require 'sinatra'
require 'sendgrid-ruby'
include SendGrid

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

post '/email-form' do
	email_from= params[:email]
	subject_to_send=params[:subject]
	content_of_email=params[:message]
	sender_name=params[:name]

	from = Email.new(email: email_from, name:sender_name)
	to = Email.new(email: 'Joshua@reyoumassage.com')
	subject = subject_to_send
	content = Content.new(type: 'text/plain', value: content_of_email)
	mail = Mail.new(from, subject, to, content)

	sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
	response = sg.client.mail._('send').post(request_body: mail.to_json)
	puts response.status_code
	puts response.body
	puts response.headers
	redirect '/contact'
end
