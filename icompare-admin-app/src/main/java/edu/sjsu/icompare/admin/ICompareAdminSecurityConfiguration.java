package edu.sjsu.icompare.admin;

import static org.springframework.security.extensions.saml2.config.SAMLConfigurer.saml;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@EnableWebSecurity
@Configuration
@EnableGlobalMethodSecurity(securedEnabled = true)
public class ICompareAdminSecurityConfiguration extends WebSecurityConfigurerAdapter {
	@Value("${security.saml2.metadata-url}")
	String metadataUrl;

	@Value("${server.ssl.key-alias}")
	String keyAlias;

	@Value("${server.ssl.key-store-password}")
	String password;

	@Value("${server.port}")
	String port;

	@Value("${server.ssl.key-store}")
	String keyStoreFilePath;
	
	@Value("${host.name}")
	String hostName;

	@Override
	protected void configure(final HttpSecurity http) throws Exception {
		http.csrf().disable();
		http.authorizeRequests().antMatchers("/saml*").permitAll().anyRequest().authenticated().and().apply(saml())
				.serviceProvider().keyStore().storeFilePath(this.keyStoreFilePath).password(this.password)
				.keyname(this.keyAlias).keyPassword(this.password).and().protocol("https")
				.hostname(String.format("%s:%s", this.hostName, this.port)).basePath("/").and().identityProvider()
				.metadataFilePath(this.metadataUrl);
		
		//http.logout().logoutSuccessUrl("/").logoutRequestMatcher(new AntPathRequestMatcher("/logout"));
	}
}
