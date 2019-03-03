FROM centos:7

RUN localedef --no-archive -i en_US -f UTF-8 en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

ENV NODE_ENV development
ENV PKG_CONFIG_PATH /usr/local/lib/pkgconfig:/opt/X11/lib/pkgconfig

RUN curl --silent --location https://rpm.nodesource.com/setup_8.x | bash -
RUN yum -y update
RUN yum -y groupinstall "Development tools"
RUN yum -y install epel-release
RUN curl -sL https://rpm.nodesource.com/setup_10.x | bash -
RUN yum clean all 
RUN yum makecache fast
RUN yum install -y gcc-c++ make
RUN yum install -y nodejs

# yarn
RUN curl https://dl.yarnpkg.com/rpm/yarn.repo -o /etc/yum.repos.d/yarn.repo
RUN yum -y install yarn

RUN yarn add nodemon -g

WORKDIR /home/smart-keg/www

