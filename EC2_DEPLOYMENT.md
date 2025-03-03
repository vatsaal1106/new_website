# EC2 Deployment Guide

This guide will help you deploy the Next.js application on an Amazon EC2 instance.

## Prerequisites

1. An Amazon EC2 instance running Amazon Linux 2
2. SSH access to your EC2 instance
3. Git installed on your local machine
4. Your application's GitHub repository URL

## EC2 Instance Setup

1. **Launch an EC2 Instance**:
   - Choose Amazon Linux 2 AMI
   - Select t2.micro (free tier) or larger instance type
   - Configure security group to allow:
     - SSH (port 22)
     - HTTP (port 80)
     - HTTPS (port 443)

2. **Connect to your EC2 instance**:
   ```bash
   ssh -i your-key.pem ec2-user@your-ec2-public-dns
   ```

3. **Transfer deployment files**:
   ```bash
   scp -i your-key.pem deploy-ec2.sh ec2-user@your-ec2-public-dns:/home/ec2-user/
   ```

4. **Run the deployment script**:
   ```bash
   cd /home/ec2-user
   ./deploy-ec2.sh
   ```

## Application Management

### View Application Logs
```bash
pm2 logs next-app
```

### Restart Application
```bash
pm2 restart next-app
```

### Stop Application
```bash
pm2 stop next-app
```

### Start Application
```bash
pm2 start next-app
```

## Security Considerations

1. **Update Security Group**:
   - Only allow necessary ports (22, 80, 443)
   - Restrict SSH access to your IP address

2. **Set up SSL/TLS**:
   - Consider using Let's Encrypt for free SSL certificates
   - Configure Nginx as a reverse proxy

3. **Regular Updates**:
   - Keep the system and Node.js packages updated
   - Monitor application logs for issues

## Troubleshooting

1. **Application not starting**:
   - Check PM2 logs: `pm2 logs`
   - Verify Node.js version: `node -v`
   - Check application logs in `/home/ec2-user/app`

2. **Port conflicts**:
   - Check if port 3000 is in use: `sudo lsof -i :3000`
   - Modify port in next.config.mjs if needed

3. **Permission issues**:
   - Ensure ec2-user has proper permissions
   - Check file ownership: `ls -la /home/ec2-user/app`

4. **Dependency conflicts**:
   - If you encounter dependency conflicts, try:
     ```bash
     # Clean npm cache and remove existing modules
     rm -rf node_modules
     rm -rf package-lock.json
     npm cache clean --force
     
     # Install dependencies with legacy peer deps
     npm install --legacy-peer-deps
     ```
   - If issues persist, check package.json for conflicting versions
   - Common conflicts:
     - date-fns and react-day-picker versions
     - React and React DOM versions
     - TypeScript and @types versions

## Maintenance

1. **Update Application**:
   ```bash
   cd /home/ec2-user/app
   git pull
   # Clean install with legacy peer deps
   rm -rf node_modules
   rm -rf package-lock.json
   npm cache clean --force
   npm install --legacy-peer-deps
   npm run build
   pm2 restart next-app
   ```

2. **System Updates**:
   ```bash
   sudo yum update -y
   ```

3. **Clean up**:
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Remove old builds
   rm -rf .next
   ```

## Monitoring

1. **Check Application Status**:
   ```bash
   pm2 status
   ```

2. **Monitor Resources**:
   ```bash
   pm2 monit
   ```

3. **View Application Metrics**:
   ```bash
   pm2 show next-app
   ``` 