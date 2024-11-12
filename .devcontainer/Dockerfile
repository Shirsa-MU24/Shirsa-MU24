# Use a base image with the essentials for Codespaces
FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Install SDKMAN to manage Java versions
RUN curl -s "https://get.sdkman.io" | bash && \
    bash -c "source $HOME/.sdkman/bin/sdkman-init.sh && sdk install java 21.0.0-tem"

# Set JAVA_HOME environment variable for the installed JDK
ENV JAVA_HOME /home/vscode/.sdkman/candidates/java/current
ENV PATH "$JAVA_HOME/bin:$PATH"

# Verify the installation
RUN java -version
