import smtplib, ssl

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login('stanserverinfo@gmail.com', 'sS358Lt7@6969420')
    server.sendmail('stanserverinfo@gmail.com', 'syw2007@gmail.com', message)
    server.quit()

if __name__ == '__main__':
    engine() 